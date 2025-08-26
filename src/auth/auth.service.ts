import { Injectable } from "@nestjs/common";
import { LoginDto } from "./auth.dto";
import { LoggerService } from "../logger/logger.service";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessException } from "../exception";
import { StatusCode, UserTokenPayload } from "../types";
import argon from "argon2";
import { CertificateType, User } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  private getUserTokenPayload(user: User): UserTokenPayload {
    return {
      id: user.id,
      name: user.name || "",
      role: user.role,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new BusinessException("用户不存在", StatusCode.FAIL);
    }

    if (!(await argon.verify(user.password, dto.password))) {
      throw new BusinessException("账号或密码不正确", StatusCode.FAIL);
    }

    const payload = this.getUserTokenPayload(user);
    const token = this.jwtService.sign(payload);

    const sessions = await this.prisma.certificate.findMany({
      where: {
        type: CertificateType.REFRESH_TOKEN,
        relatedId: user.id,
      },
      orderBy: {
        usedAt: "desc",
      },
    });

    if (sessions.length >= Number(this.config.get("MAX_LOGIN_DEVICE"))) {
      const oldest = sessions[sessions.length - 1];
      await this.prisma.certificate.delete({
        where: {
          id: oldest.id,
        },
      });
    }

    await this.prisma.certificate.create({
      data: {
        type: CertificateType.REFRESH_TOKEN,
        relatedId: user.id,
        content: token,
        expiredAt: "",
        usedAt: "",
        userAgent: "",
      },
    });

    return { access_token: token };
  }
}
