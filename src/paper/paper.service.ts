import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPaperDto, GetSectionDto, GetSectionsDto } from "./paper.dto";
import { BusinessException } from "../exception";
import { SECTION_TYPE_LABEL } from "../constant";

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
        parts: true,
      },
    });
    if (!paper) {
      throw new BusinessException("Paper not Found");
    } else {
      return paper;
    }
  }

  async getSections(dto: GetSectionsDto) {
    const sectionTypes = await this.prisma.paperSection.groupBy({
      where: { partId: dto.partId },
      by: ["type"],
    });
    return Promise.all(
      sectionTypes.map(async (sectionType) => {
        return {
          label: SECTION_TYPE_LABEL[sectionType.type],
          items: await this.prisma.paperSection.findMany({
            where: { type: sectionType.type, partId: dto.partId },
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
          }),
        };
      }),
    );
  }

  getSection(dto: GetSectionDto) {
    return this.prisma.paperSection.findUnique({
      where: {
        id: dto.id,
      },
      include: {
        questions: {
          include: {
            choices: true,
          },
        },
      },
    });
  }
}
