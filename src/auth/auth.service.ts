import { Injectable } from "@nestjs/common";
import { LoginDto } from "./auth.dto";
import { LoggerService } from "../logger/logger.service";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessException } from "../exception";
import { StatusCode } from "../types";

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private prisma: PrismaService,
  ) {}

  login(dto: LoginDto) {
    return dto;
  }
}
