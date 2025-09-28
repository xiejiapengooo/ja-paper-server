import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPaperDto, GetSectionsDto, PostPaperDto } from "./paper.dto";
import { BusinessException } from "../exception";
import { PAPER_QUESTION_TYPE_WEIGHT, PAPER_SECTION_SCORE, SECTION_TYPE_LABEL } from "../constant";
import { UserTokenPayload } from "../types";
import dayjs from "dayjs";
import { Paper, PaperLevel, PaperQuestion, PaperSection, UserQuestion } from "@prisma/client";

@Injectable()
export class PaperService {
  constructor(private prisma: PrismaService) {}

  async getList() {
    const groups = await this.prisma.paper.groupBy({
      by: ["level"],
    });

    return Promise.all(
      groups.map(async (group) => {
        const papers = await this.prisma.paper.findMany({
          where: { level: group.level },
        });
        return { level: group.level, items: papers };
      }),
    );
  }

  async getScores(userTokenPayload: UserTokenPayload) {
    const userQuestions = await this.prisma.userQuestion.findMany({
      where: {
        userId: userTokenPayload.id,
      },
      include: {
        question: {
          include: {
            section: {
              select: {
                type: true,
              }
            }
          },
        }
      }
    });
    const groupMap = new Map<Paper["id"], { isCorrect: UserQuestion["isCorrect"], questionType: PaperQuestion["type"], sectionType: PaperSection["type"], questionId: PaperQuestion["id"] }[]>();
    userQuestions.forEach((userQuestion) => {
      const paperId = userQuestion.question.paperId;
      if (groupMap.has(paperId)) {
        groupMap.get(paperId)?.push({
          isCorrect: userQuestion.isCorrect,
          questionType: userQuestion.question.type,
          sectionType: userQuestion.question.section.type,
          questionId: userQuestion.questionId,
        });
      } else {
        groupMap.set(paperId, [{
          isCorrect: userQuestion.isCorrect,
          questionType: userQuestion.question.type,
          sectionType: userQuestion.question.section.type,
          questionId: userQuestion.questionId,
        }]);
      }
    });

    const paperIds = Array.from(groupMap.keys());
    const papers = await this.prisma.paper.findMany({
      where: {
        id: {
          in: paperIds,
        }
      }
    })

    const paperMap = new Map<Paper["id"], Paper>(papers.map((paper) => [paper.id, paper]));
    let paperScoreMap: Record<Paper["id"], {
      score: number;
      pass: Boolean
    }> = {}

    for (const [paperId, list] of groupMap) {
      const level = paperMap.get(paperId)?.level as PaperLevel;
      const weightMap = new Map<PaperSection["type"], { weight: number, totalWeight: number, score: number, pass: Boolean }>();
      list.forEach((item) => {
        if (weightMap.has(item.sectionType)) {
          const weightMapItem = weightMap.get(item.sectionType);
          if (weightMapItem) {
            if (item.isCorrect) {
              weightMapItem.weight += PAPER_QUESTION_TYPE_WEIGHT[level][item.questionType];
            }
            weightMapItem.totalWeight += PAPER_QUESTION_TYPE_WEIGHT[level][item.questionType];
          }
        } else {
          weightMap.set(item.sectionType, {
            weight: item.isCorrect ? PAPER_QUESTION_TYPE_WEIGHT[level][item.questionType] : 0,
            totalWeight: PAPER_QUESTION_TYPE_WEIGHT[level][item.questionType],
            score: 0,
            pass: false
          })
        }
      });

      let score = 0, pass = false
      for (const [sectionType, weightMapItem] of weightMap) {
        weightMapItem.score = Math.round((weightMapItem.weight / weightMapItem.totalWeight) * PAPER_SECTION_SCORE[level][sectionType].full_score)
        weightMapItem.pass = weightMapItem.score >= PAPER_SECTION_SCORE[level][sectionType].pass_score;
        score += weightMapItem.score;
      }
      pass = score >= PAPER_SECTION_SCORE[level].ALL.pass_score;

      paperScoreMap[paperId] = {
        score,
        pass: false
      }
    }
    return paperScoreMap
  }

  async getPaper(dto: GetPaperDto) {
    const year = Number(dto.yearMonth.slice(0, 4));
    const month = Number(dto.yearMonth.slice(4, 6));
    const paper = await this.prisma.paper.findFirst({
      where: {
        level: dto.level,
        year,
        month,
      },
      include: {
        parts: {
          orderBy: {
            order: "asc",
          },
          include: {
            sections: {
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    });
    if (!paper) {
      throw new BusinessException("Paper not Found");
    } else {
      return paper;
    }
  }

  async postPaper(dto: PostPaperDto, userTokenPayload: UserTokenPayload) {
    const questions = await this.prisma.paperQuestion.findMany({
      where: {
        id: {
          in: dto.questionAnswerList.map(({ questionId }) => questionId),
        },
      },
      include: {
        choices: {
          where: {
            isCorrect: true,
          },
        },
      },
    });
    const questionMap = new Map(questions.map((question) => [question.id, question]));
    const upserts = dto.questionAnswerList.map(({ questionId, answer }) => {
      const question = questionMap.get(questionId);
      if (!question) throw new BusinessException("Submission Fail");

      const lastAnswerAt = dayjs().toISOString();
      const correctAnswer = question.choices.map(choice => choice.id).toSorted().join(",");
      const userAnswer = Array.isArray(answer) ? Array.from(new Set(answer)).toSorted().join(",") : answer;
      const isCorrect = userAnswer === correctAnswer;

      return this.prisma.userQuestion.upsert({
        where: {
          userId_questionId: {
            userId: userTokenPayload.id,
            questionId,
          },
        },
        update: {
          lastAnswerAt,
          answer: userAnswer,
          isCorrect,
        },
        create: {
          questionId,
          userId: userTokenPayload.id,
          lastAnswerAt,
          answer: userAnswer,
          isCorrect,
        },
      });
    });

    return this.prisma.$transaction(upserts);
  }

  async getSections(dto: GetSectionsDto) {
    const part = await this.prisma.paperPart.findUnique({
      where: {
        id: dto.partId,
      },
    });

    if (part) {
      const parts = await this.prisma.paperPart.findMany({
        where: {
          paperId: part.paperId
        },
        orderBy: {
          order: "asc"
        }
      });

      const sections = await this.prisma.paperSection.findMany({
        where: { partId: dto.partId },
        orderBy: {
          order: "asc",
        },
        include: {
          questions: {
            orderBy: {
              order: "asc",
            },
            include: {
              choices: {
                orderBy: {
                  order: "asc",
                },
              },
            },
          },
        },
      });
      const sectionGroupMap = new Map();
      sections.forEach((section) => {
        Object.assign(section, { typeLabel: SECTION_TYPE_LABEL[section.type] });
        if (sectionGroupMap.has(section.type)) {
          sectionGroupMap.get(section.type).items.push(section);
        } else {
          sectionGroupMap.set(section.type, {
            label: SECTION_TYPE_LABEL[section.type],
            items: [section],
          });
        }
      });

      const currentPartIndex = parts.findIndex(item => item.id === part.id);

      return {
        nextPartId: parts[currentPartIndex + 1]?.id || "",
        duration: part.duration,
        sections: Array.from(sectionGroupMap).map(([_, value]) => value),
      };
    } else {
      throw new BusinessException("Paper Part not Found");
    }
  }
}
