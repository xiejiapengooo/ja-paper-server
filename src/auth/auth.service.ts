import { Injectable, Logger } from "@nestjs/common";
import { LoginDto } from "./auth.dto";
import { LoggerService } from "../logger/logger.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private prisma: PrismaService,
  ) {}

  login(dto: LoginDto) {
    this.logger.log("login");
    this.logger.error(new Error("test error"));
    return dto;
  }
}
