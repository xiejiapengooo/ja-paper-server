import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ForgetDto, LoginDto, LogoutAllDto, LogoutDto, PasswordResetDto, RefreshDto } from "./auth.dto";
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
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
    private als: AlsService,
    private mailService: MailService,
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
      throw new BusinessException("User does not exist.");
    }

    if (!(await argon.verify(user.password, dto.password))) {
      throw new BusinessException("Incorrect username or password.");
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
        throw new BusinessException("The number of logged-in devices has reached the limit.");
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
      throw new UnauthorizedException("The credentials have expired.");
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
      throw new UnauthorizedException("Invalid credentials.");
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

  async passwordForget(dto: ForgetDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new BusinessException("User does not exist.");

    const token = this.jwtService.sign(
      { email: dto.email, userId: user.id },
      { expiresIn: this.config.get("MAIL_TOKEN_EXPIRES") },
    );
    const tokenDecoded = this.jwtService.decode(token);
    const tokenExpiredAt = dayjs(tokenDecoded.exp * 1000).toISOString();

    await this.prisma.certificate.create({
      data: {
        type: CertificateType.PASSWORD_RESET,
        relatedId: user.id,
        content: token,
        expiredAt: tokenExpiredAt,
        userAgent: this.als.getUserAgent(),
      },
    });

    await this.mailService.sendPasswordResetEmail({
      email: user.email,
      token,
    });
  }

  async passwordReset(dto: PasswordResetDto) {
    const certificate = await this.prisma.certificate.findUnique({
      where: { content: dto.token },
    });

    if (
      !certificate ||
      !certificate.usedAt ||
      !certificate.relatedId ||
      dayjs(certificate.expiredAt).isBefore(dayjs())
    ) {
      throw new BusinessException("Invalid credential.");
    }

    const hashedPassword = await argon.hash(dto.password);

    await this.prisma.user.update({
      where: { id: certificate.relatedId },
      data: { password: hashedPassword },
    });

    await this.prisma.certificate.update({
      where: { id: certificate.id },
      data: { usedAt: dayjs().toISOString() },
    });

    await this.logoutAll({ userId: certificate.relatedId });
  }
}
