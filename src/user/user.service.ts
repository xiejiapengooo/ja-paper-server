import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatchMeDto } from "./user.dto";
import { UserTokenPayload } from "../types";
import { BusinessException } from "../exception";
import { CertificateType } from "@prisma/client";
import dayjs from "dayjs";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMe(userTokenPayload: UserTokenPayload) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userTokenPayload.id,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new BusinessException("User does not exist.");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async patchMe(dto: PatchMeDto, userTokenPayload: UserTokenPayload) {
    try {
      await this.prisma.user.update({
        where: {
          id: userTokenPayload.id,
          deletedAt: null,
        },
        data: {
          name: dto.name,
        },
      });
    } catch (error) {
      throw new BusinessException("Fail to update account information.");
    }
  }

  async deleteMe(userTokenPayload: UserTokenPayload) {
    try {
      await this.prisma.certificate.deleteMany({
        where: { relatedId: userTokenPayload.id, type: CertificateType.REFRESH_TOKEN },
      });
      await this.prisma.user.update({
        where: {
          id: userTokenPayload.id,
        },
        data: {
          deletedAt: dayjs().toISOString(),
        },
      });
    } catch (error) {
      throw new BusinessException("Fail to delete account.");
    }
  }
}
