import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto, LogoutAllDto, LogoutDto, RefreshDto } from "./auth.dto";
import { LoggerService } from "../logger/logger.service";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessException } from "../exception";
import { UserTokenPayload } from "../types";
import argon from "argon2";
import { CertificateType, User } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import dayjs from "dayjs";
import { AlsService } from "../als/als.service";

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
    private als: AlsService,
  ) {}

  private getUserTokenPayload(user: User): UserTokenPayload {
    return {
      id: user.id,
      name: user.name || "",
      role: user.role,
    };
  }

  private generateAccessToken(payload: UserTokenPayload) {
    return this.jwtService.sign(payload, {
      expiresIn: this.config.get("ACCESS_TOKEN_EXPIRES"),
    });
  }

  private generateRefreshToken(userId: User["id"]) {
    return this.jwtService.sign(
      {
        id: userId,
      },
      {
        expiresIn: this.config.get("REFRESH_TOKEN_EXPIRES"),
      },
    );
  }

  private signNewToken(payload: UserTokenPayload) {
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload.id);

    const refreshTokenDecoded = this.jwtService.decode(refreshToken);
    const refreshTokenExpiredAt = dayjs(refreshTokenDecoded.exp * 1000).toISOString();

    return { accessToken, refreshToken, refreshTokenExpiredAt };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new BusinessException("用户不存在");
    }

    if (!(await argon.verify(user.password, dto.password))) {
      throw new BusinessException("账号或密码不正确");
    }

    const payload = this.getUserTokenPayload(user);
    const { accessToken, refreshToken, refreshTokenExpiredAt } = this.signNewToken(payload);

    const sessions = await this.prisma.certificate.findMany({
      where: {
        type: CertificateType.REFRESH_TOKEN,
        relatedId: user.id,
      },
      orderBy: {
        usedAt: "desc",
      },
    });

    const maxLoginDevice = Number(this.config.get("MAX_LOGIN_DEVICE"));
    if (sessions.length >= maxLoginDevice) {
      const oldSessions = sessions.slice(maxLoginDevice);
      const { count } = await this.prisma.certificate.deleteMany({
        where: {
          id: {
            in: oldSessions.map((session) => session.id),
          },
        },
      });
      if (count !== oldSessions.length) {
        throw new BusinessException("登录设备数量已达上限");
      }
    }

    await this.prisma.certificate.create({
      data: {
        type: CertificateType.REFRESH_TOKEN,
        relatedId: user.id,
        content: refreshToken,
        expiredAt: refreshTokenExpiredAt,
        usedAt: dayjs().toISOString(),
        userAgent: this.als.getUserAgent(),
      },
    });

    return { accessToken, refreshToken };
  }

  async refresh(dto: RefreshDto) {
    let payload: UserTokenPayload;
    try {
      payload = this.jwtService.verify<UserTokenPayload>(dto.refreshToken);
    } catch (error) {
      throw new UnauthorizedException("凭证已过期");
    }

    const session = await this.prisma.certificate.findFirst({
      where: {
        relatedId: payload.id,
        type: CertificateType.REFRESH_TOKEN,
        userAgent: this.als.getUserAgent(),
        content: dto.refreshToken,
      },
    });

    if (!session) {
      await this.prisma.certificate.deleteMany({
        where: {
          type: CertificateType.REFRESH_TOKEN,
          relatedId: payload.id,
        },
      });
      throw new UnauthorizedException("无效凭证");
    }

    const { accessToken, refreshToken, refreshTokenExpiredAt } = this.signNewToken(payload);

    await this.prisma.certificate.update({
      where: { id: session.id },
      data: {
        content: refreshToken,
        usedAt: dayjs().toISOString(),
        expiredAt: refreshTokenExpiredAt,
      },
    });

    return { accessToken, refreshToken };
  }

  async logout(dto: LogoutDto) {
    await this.prisma.certificate.deleteMany({
      where: { content: dto.refreshToken },
    });
  }

  async logoutAll(dto: LogoutAllDto) {
    await this.prisma.certificate.deleteMany({
      where: { relatedId: dto.userId, type: CertificateType.REFRESH_TOKEN },
    });
  }
}
