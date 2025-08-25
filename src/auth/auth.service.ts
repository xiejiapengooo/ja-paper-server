import { Injectable, Logger } from "@nestjs/common";
import { LoginDto } from "./auth.dto";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor() {}

  login(dto: LoginDto) {
    return dto;
  }
}
