import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPaperDto, PostPaperDto } from "./paper.dto";
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

  async getList(userTokenPayload?: UserTokenPayload) {
    const papers = await this.prisma.paper.findMany();
    const paperMap = new Map<
      Paper["id"],
      Paper & {
        result: ReturnType<PaperService["calcScore"]> | null;
      }
    >(papers.map((paper) => [paper.id, Object.assign(paper, { result: null })]));

    if (userTokenPayload) {
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

      const userPaperIds = Array.from(new Set(userQuestions.map((userQuestion) => userQuestion.question.paperId)));
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

      for (const [paperId, questions] of paperQuestionMap) {
        const paper = paperMap.get(paperId);
        if (paper) {
          paper.result = this.calcScore({
            level: paper.level,
            questions,
          });
        }
      }
    }

    const paperLevelMap = new Map<Paper["level"], NonNullable<ReturnType<typeof paperMap.get>>[]>();
    for (const paper of paperMap.values()) {
      if (paperLevelMap.has(paper.level)) {
        paperLevelMap.get(paper.level)?.push(paper);
      } else {
        paperLevelMap.set(paper.level, [paper]);
      }
    }

    return Array.from(paperLevelMap.keys()).map((level) => ({
      level,
      items: paperLevelMap.get(level) || [],
    }));
  }

  async getPaper(dto: GetPaperDto, userTokenPayload: UserTokenPayload) {
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
            },
          },
        },
      },
    });
    if (!paper) {
      throw new BusinessException("Paper not Found");
    } else {
      const paperPartMap = new Map<PaperPart["id"], PaperPart>();
      const paperSectionMap = new Map<PaperSection["id"], PaperSection>();
      const paperQuestionMap = new Map<PaperQuestion["id"], PaperQuestion>();
      paper.parts.forEach((part) => {
        paperPartMap.set(part.id, part);
        part.sections.forEach((section) => {
          Object.assign(section, { typeLabel: SECTION_TYPE_LABEL[section.type] });
          paperSectionMap.set(section.id, section);
          section.questions.forEach((question) => {
            paperQuestionMap.set(question.id, question);
          });
        });
      });

      const userQuestions = await this.prisma.userQuestion.findMany({
        where: {
          userId: userTokenPayload.id,
          questionId: {
            in: Array.from(paperQuestionMap.values()).map((question) => question.id),
          },
        },
      });

      let paperScore: ReturnType<PaperService["calcScore"]> | null = null;
      if (userQuestions.length) {
        const userQuestionMap = new Map<PaperQuestion["id"], UserQuestion>(
          userQuestions.map((userQuestion) => [userQuestion.questionId, userQuestion]),
        );

        let list: Parameters<PaperService["calcScore"]>[0]["questions"] = [];
        for (const [questionId, question] of paperQuestionMap) {
          const userQuestion = userQuestionMap.get(questionId);
          list.push({
            isCorrect: userQuestion?.isCorrect || false,
            questionType: question.type,
            sectionType: paperSectionMap.get(question.sectionId)?.type as PaperSection["type"],
            partId: question.partId,
          });
        }

        paperScore = this.calcScore({
          level: paper.level,
          questions: list,
        });
      }

      return Object.assign(paper, {
        result: paperScore,
      });
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
}
