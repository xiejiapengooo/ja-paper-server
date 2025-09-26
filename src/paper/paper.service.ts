import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPaperDto, GetSectionsDto, PostPaperDto } from "./paper.dto";
import { BusinessException } from "../exception";
import { SECTION_TYPE_LABEL } from "../constant";
import { UserTokenPayload } from "../types";
import dayjs from "dayjs";

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
    console.log(userTokenPayload);
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
      return {
        label: part.title,
        duration: part.duration,
        sections: Array.from(sectionGroupMap).map(([_, value]) => value),
      };
    } else {
      throw new BusinessException("Paper Part not Found");
    }
  }
}
