import { Injectable, UnauthorizedException } from "@nestjs/common";
import { RegisterDto, ForgotDto, LoginDto, PasswordResetDto, RegisterCompletionDto, TokenPayloadDto } from "./auth.dto";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessException } from "../exception";
import { PasswordResetTokenPayload, RegisterTokenPayload, UserTokenPayload } from "../types";
import argon from "argon2";
import { CertificateType, User, UserRole, UserStatus } from "@prisma/client";
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
        deletedAt: null,
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

    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(refreshToken: string) {
    let payload: UserTokenPayload;
    try {
      payload = this.jwtService.verify<UserTokenPayload>(refreshToken);
    } catch (error) {
      throw new UnauthorizedException("The credentials have expired.");
    }

    const session = await this.prisma.certificate.findFirst({
      where: {
        relatedId: payload.id,
        type: CertificateType.REFRESH_TOKEN,
        userAgent: this.als.getUserAgent(),
        content: refreshToken,
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

    const user = await this.prisma.user.findUnique({
      where: { id: payload.id, deletedAt: null },
    });
    if (!user) {
      throw new BusinessException("User does not exist.");
    }

    const newPayload = this.getUserTokenPayload(user);
    const {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      refreshTokenExpiredAt,
    } = this.signNewToken(newPayload);

    await this.prisma.certificate.update({
      where: { id: session.id },
      data: {
        content: newRefreshToken,
        usedAt: dayjs().toISOString(),
        expiredAt: refreshTokenExpiredAt,
      },
    });

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }

  async logout(refreshToken: string) {
    try {
      await this.prisma.certificate.delete({
        where: { content: refreshToken, userAgent: this.als.getUserAgent(), type: CertificateType.REFRESH_TOKEN },
      });
    } catch (error) {
      throw new BusinessException("Fail to sign out.");
    }
  }

  async logoutAll(refreshToken: string) {
    const certificate = await this.prisma.certificate.findUnique({
      where: { content: refreshToken, userAgent: this.als.getUserAgent(), type: CertificateType.REFRESH_TOKEN },
    });
    if (!certificate) {
      throw new BusinessException("Fail to sign out.");
    }
    await this.prisma.certificate.deleteMany({
      where: { relatedId: certificate.relatedId, type: CertificateType.REFRESH_TOKEN },
    });
  }

  async passwordForgot(dto: ForgotDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email, deletedAt: null },
    });
    if (!user) throw new BusinessException("User does not exist.");

    const payload: PasswordResetTokenPayload = {
      email: user.email,
      userId: user.id,
    };
    const expiresIn = this.config.get("PASSWORD_RESET_MAIL_TOKEN_EXPIRES");
    const token = this.jwtService.sign(payload, { expiresIn });
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
      expiresIn,
    });
  }

  async passwordReset(dto: PasswordResetDto) {
    let payload: PasswordResetTokenPayload;
    try {
      payload = this.jwtService.verify<PasswordResetTokenPayload>(dto.token);
    } catch (error) {
      throw new UnauthorizedException("The credentials have expired.");
    }

    const certificate = await this.prisma.certificate.findUnique({
      where: { content: dto.token },
    });

    if (
      !certificate ||
      certificate.usedAt ||
      !certificate.relatedId ||
      dayjs(certificate.expiredAt).isBefore(dayjs()) ||
      payload.userId !== certificate.relatedId
    ) {
      throw new UnauthorizedException("Invalid credential.");
    }

    const hashedPassword = await argon.hash(dto.password);

    await this.prisma.user.update({
      where: { id: certificate.relatedId, deletedAt: null },
      data: { password: hashedPassword },
    });

    await this.prisma.certificate.update({
      where: { id: certificate.id },
      data: { usedAt: dayjs().toISOString() },
    });

    await this.prisma.certificate.deleteMany({
      where: { relatedId: certificate.relatedId, type: CertificateType.REFRESH_TOKEN },
    });
  }

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email, status: { not: UserStatus.PENDING } },
    });

    if (existingUser) {
      throw new BusinessException("This email is already registered.");
    }

    const user = await this.prisma.user.upsert({
      where: {
        email: dto.email,
      },
      create: {
        email: dto.email,
        role: UserRole.USER,
        status: UserStatus.PENDING,
        password: "",
        name: "",
      },
      update: {
        deletedAt: null,
        role: UserRole.USER,
        status: UserStatus.PENDING,
        password: "",
        name: "",
      },
    });

    const payload: RegisterTokenPayload = {
      email: user.email,
      userId: user.id,
    };
    const expiresIn = this.config.get("REGISTER_MAIL_TOKEN_EXPIRES");
    const token = this.jwtService.sign(payload, { expiresIn });
    const tokenDecoded = this.jwtService.decode(token);
    const tokenExpiredAt = dayjs(tokenDecoded.exp * 1000).toISOString();

    await this.prisma.certificate.create({
      data: {
        type: CertificateType.REGISTER,
        relatedId: user.id,
        content: token,
        expiredAt: tokenExpiredAt,
        userAgent: this.als.getUserAgent(),
      },
    });

    this.mailService.sendRegisterEmail({
      email: user.email,
      token,
      expiresIn,
    });
  }

  async registerCompletion(dto: RegisterCompletionDto) {
    let payload: RegisterTokenPayload;
    try {
      payload = this.jwtService.verify<RegisterTokenPayload>(dto.token);
    } catch (error) {
      throw new UnauthorizedException("The credentials have expired.");
    }

    const certificate = await this.prisma.certificate.findUnique({
      where: { content: dto.token },
    });

    if (
      !certificate ||
      certificate.usedAt ||
      !certificate.relatedId ||
      dayjs(certificate.expiredAt).isBefore(dayjs()) ||
      payload.userId !== certificate.relatedId
    ) {
      throw new UnauthorizedException("Invalid credential.");
    }

    const hashedPassword = await argon.hash(dto.password);

    const user = await this.prisma.user.update({
      where: { id: certificate.relatedId, deletedAt: null },
      data: {
        password: hashedPassword,
        name: dto.name,
        status: UserStatus.ACTIVED,
      },
    });

    await this.prisma.certificate.update({
      where: { id: certificate.id },
      data: { usedAt: dayjs().toISOString() },
    });

    return await this.login({
      email: user.email,
      password: dto.password,
    });
  }

  async tokenPayload(dto: TokenPayloadDto) {
    let payload: Record<string, any>;
    try {
      payload = this.jwtService.verify(dto.token);
    } catch (error) {
      throw new UnauthorizedException("The credentials have expired.");
    }

    const certificate = await this.prisma.certificate.findUnique({
      where: { content: dto.token },
    });
    if (!certificate || certificate.usedAt || dayjs(certificate.expiredAt).isBefore(dayjs())) {
      throw new UnauthorizedException("Invalid credential.");
    }

    return payload;
  }
}
