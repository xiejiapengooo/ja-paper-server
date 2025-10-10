import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPaperDto, GetPartDto, GetScoreDto, PostPaperDto } from "./paper.dto";
import { BusinessException } from "../exception";
import { COS_PAPER_PREFIX, PAPER_QUESTION_TYPE_WEIGHT, PAPER_SECTION_SCORE, SECTION_TYPE_LABEL } from "../constant";
import { UserTokenPayload } from "../types";
import dayjs from "dayjs";
import { Paper, PaperLevel, PaperPart, PaperQuestion, PaperSection, UserQuestion } from "@prisma/client";
import { CosUtils } from "../libs/cos";

@Injectable()
export class PaperService {
  constructor(private prisma: PrismaService) {}

  calcScore({
    level,
    questions,
  }: {
    level: PaperLevel;
    questions: {
      isCorrect: UserQuestion["isCorrect"];
      questionType: PaperQuestion["type"];
      sectionType: PaperSection["type"];
      partId: PaperPart["id"];
    }[];
  }) {
    const partQuestionMap = new Map<PaperPart["id"], Parameters<PaperService["calcScore"]>[0]["questions"]>();

    questions.forEach((question) => {
      if (partQuestionMap.has(question.partId)) {
        partQuestionMap.get(question.partId)?.push(question);
      } else {
        partQuestionMap.set(question.partId, [question]);
      }
    });

    let partScoreMap: Record<
      PaperPart["id"],
      {
        score: number;
        pass: Boolean;
      }
    > = {};
    for (const [partId, partQuestions] of partQuestionMap) {
      const weightMap = new Map<
        PaperSection["type"],
        { weight: number; totalWeight: number; score: number; pass: Boolean }
      >();
      partQuestions.forEach((question) => {
        let weight = PAPER_QUESTION_TYPE_WEIGHT[level][question.questionType] || 1;
        if (weightMap.has(question.sectionType)) {
          const weightMapItem = weightMap.get(question.sectionType);
          if (weightMapItem) {
            if (question.isCorrect) {
              weightMapItem.weight += weight;
            }
            weightMapItem.totalWeight += weight;
          }
        } else {
          weightMap.set(question.sectionType, {
            weight: question.isCorrect ? weight : 0,
            totalWeight: weight,
            score: 0,
            pass: false,
          });
        }
      });

      let score = 0,
        pass = false;
      for (const [sectionType, weightMapItem] of weightMap) {
        weightMapItem.score = Math.round(
          (weightMapItem.weight / weightMapItem.totalWeight) * PAPER_SECTION_SCORE[level][sectionType].full_score,
        );
        weightMapItem.pass = weightMapItem.score >= PAPER_SECTION_SCORE[level][sectionType].pass_score;
        score += weightMapItem.score;
      }
      pass = Array.from(weightMap.values()).every((item) => item.pass);
      partScoreMap[partId] = {
        score,
        pass,
      };
    }

    const totalScore = Object.values(partScoreMap).reduce((acc, item) => acc + item.score, 0);
    const allPass =
      totalScore >= PAPER_SECTION_SCORE[level].ALL.pass_score && Object.values(partScoreMap).every((item) => item.pass);

    return {
      partScores: partScoreMap,
      score: totalScore,
      pass: allPass,
    };
  }

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
          select: {
            paperId: true,
          },
        },
      },
    });
    const userQuestionMap = new Map<PaperQuestion["id"], UserQuestion>(
      userQuestions.map((userQuestion) => [userQuestion.questionId, userQuestion]),
    );

    const userPaperIds = userQuestions.map((userQuestion) => userQuestion.question.paperId);
    const questions = await this.prisma.paperQuestion.findMany({
      where: {
        paperId: {
          in: userPaperIds,
        },
      },
    });

    const paperSections = await this.prisma.paperSection.findMany({
      where: {
        paperId: {
          in: userPaperIds,
        },
      },
    });
    const paperSectionMap = new Map<PaperSection["id"], PaperSection>(
      paperSections.map((paperSection) => [paperSection.id, paperSection]),
    );

    const papers = await this.prisma.paper.findMany({
      where: {
        id: {
          in: userPaperIds,
        },
      },
    });
    const paperMap = new Map<Paper["id"], Paper>(papers.map((paper) => [paper.id, paper]));

    const paperQuestionMap = new Map<Paper["id"], Parameters<PaperService["calcScore"]>[0]["questions"]>();
    for (const question of questions) {
      const userQuestion = userQuestionMap.get(question.id);
      if (paperQuestionMap.has(question.paperId)) {
        paperQuestionMap.get(question.paperId)?.push({
          isCorrect: userQuestion?.isCorrect || false,
          questionType: question.type,
          sectionType: paperSectionMap.get(question.sectionId)?.type as PaperSection["type"],
          partId: question.partId,
        });
      } else {
        paperQuestionMap.set(question.paperId, [
          {
            isCorrect: userQuestion?.isCorrect || false,
            questionType: question.type,
            sectionType: paperSectionMap.get(question.sectionId)?.type as PaperSection["type"],
            partId: question.partId,
          },
        ]);
      }
    }

    const paperScoreMap: Record<Paper["id"], ReturnType<PaperService["calcScore"]>> = {};
    for (const [paperId, questions] of paperQuestionMap) {
      paperScoreMap[paperId] = this.calcScore({
        level: paperMap.get(paperId)?.level as PaperLevel,
        questions,
      });
    }

    return paperScoreMap;
  }

  async getScore(dto: GetScoreDto, userTokenPayload: UserTokenPayload) {
    const paper = await this.getPaper({
      level: dto.level,
      yearMonth: dto.yearMonth,
    });

    const userQuestions = await this.prisma.userQuestion.findMany({
      where: {
        userId: userTokenPayload.id,
      },
    });
    const userQuestionMap = new Map<PaperQuestion["id"], UserQuestion>(
      userQuestions.map((userQuestion) => [userQuestion.questionId, userQuestion]),
    );

    const questions = await this.prisma.paperQuestion.findMany({
      where: {
        paperId: paper.id,
      },
      include: {
        section: {
          select: {
            type: true,
          },
        },
      },
    });
    let list: Parameters<PaperService["calcScore"]>[0]["questions"] = [];
    for (const question of questions) {
      const userQuestion = userQuestionMap.get(question.id);
      list.push({
        isCorrect: userQuestion?.isCorrect || false,
        questionType: question.type,
        sectionType: question.section.type,
        partId: question.partId,
      });
    }

    return this.calcScore({
      level: paper.level,
      questions: list,
    });
  }

  async getPaper(dto: GetPaperDto) {
    const year = dto.yearMonth.slice(0, 4);
    const month = dto.yearMonth.slice(4, 6);
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

  async postPaper(paperId: string, dto: PostPaperDto, userTokenPayload: UserTokenPayload) {
    const questions = await this.prisma.paperQuestion.findMany({
      where: {
        paperId,
      },
      include: {
        choices: {
          where: {
            isCorrect: true,
          },
        },
      },
    });
    const questionAnswerMap = new Map(dto.questionAnswerList.map(({ questionId, answer }) => [questionId, answer]));
    const upserts = questions.map((question) => {
      const questionAnswer = questionAnswerMap.get(question.id) || "";

      const lastAnswerAt = dayjs().toISOString();
      const correctAnswer = question.choices
        .map((choice) => choice.id)
        .toSorted()
        .join(",");
      const userAnswer = Array.isArray(questionAnswer)
        ? Array.from(new Set(questionAnswer)).toSorted().join(",")
        : questionAnswer;
      const isCorrect = userAnswer === correctAnswer;

      return this.prisma.userQuestion.upsert({
        where: {
          userId_questionId: {
            userId: userTokenPayload.id,
            questionId: question.id,
          },
        },
        update: {
          lastAnswerAt,
          answer: userAnswer,
          isCorrect,
        },
        create: {
          questionId: question.id,
          userId: userTokenPayload.id,
          lastAnswerAt,
          answer: userAnswer,
          isCorrect,
        },
      });
    });

    return this.prisma.$transaction(upserts);
  }

  async getPart(dto: GetPartDto) {
    const part = await this.prisma.paperPart.findUnique({
      where: {
        id: dto.partId,
      },
      include: {
        paper: true,
      },
    });

    if (part) {
      const parts = await this.prisma.paperPart.findMany({
        where: {
          paperId: part.paperId,
        },
        orderBy: {
          order: "asc",
        },
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

      const currentPartIndex = parts.findIndex((item) => item.id === part.id);

      return {
        ...parts[currentPartIndex],
        listeningAudio: parts[currentPartIndex].listeningAudio
          ? CosUtils.getUrl([
              `${COS_PAPER_PREFIX(part.paper.level, part.paper.year + part.paper.month)}/${parts[currentPartIndex].listeningAudio}`,
            ])[0]
          : "",
        nextPartId: parts[currentPartIndex + 1]?.id || "",
        nextPartTitle: parts[currentPartIndex + 1]?.title || "",
        sectionGroups: Array.from(sectionGroupMap).map(([_, value]) => value),
      };
    } else {
      throw new BusinessException("Paper Part not Found");
    }
  }
}
