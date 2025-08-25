import { Controller, Get, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public } from "../decorator";
import { LoginDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("login")
  @Public()
  login(@Query() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
