import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPartsDto, GetSectionDto } from "./paper.dto";

@Injectable()
export class PaperService {
  constructor(private prisma: PrismaService) {}

  async getList() {
    const groups = await this.prisma.paper.groupBy({
      by: ["year"],
      orderBy: { year: "desc" },
    });

    return Promise.all(
      groups.map(async (group) => {
        const papers = await this.prisma.paper.findMany({
          where: { year: group.year },
        });
        return { year: group.year, papers };
      }),
    );
  }

  getParts(dto: GetPartsDto) {
    return this.prisma.paperPart.findMany({
      where: {
        paperId: dto.paperId,
      },
    });
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
