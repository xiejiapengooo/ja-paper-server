import { Body, Controller, Get, Post, Param, Res, UnauthorizedException} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "../decorator";
import { type Response } from "express";
import {
  RegisterDto,
  ForgotDto,
  LoginDto,
  LogoutAllDto,
  LogoutDto,
  PasswordResetDto,
  RegisterCompletionDto,
  TokenPayloadDto,
} from "./auth.dto";
import ms from "ms";
import { ConfigService } from "@nestjs/config";
import { Cookies } from "../decorator";

@Controller("auth")
export class AuthController {
  constructor(
    private config: ConfigService,
    private authService: AuthService,
  ) {}

  private setTokenCookie({ accessToken, refreshToken }, res: Response) {
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: ms(this.config.get("ACCESS_TOKEN_EXPIRES")),
    });
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: ms(this.config.get("REFRESH_TOKEN_EXPIRES")),
    });
  }

  @Post("login")
  @Public()
  @ResponseMessage("Login successful.")
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    this.setTokenCookie(await this.authService.login(dto), res);
  }

  @Post("refresh")
  @Public()
  @ResponseMessage("Refresh successful.")
  async refresh(@Cookies("refresh_token") refreshToken: string, @Res({ passthrough: true }) res: Response) {
    this.setTokenCookie(await this.authService.refresh(refreshToken), res);
  }

  @Post("logout")
  @ResponseMessage("Logged out.")
  logout(@Body() dto: LogoutDto) {
    return this.authService.logout(dto);
  }

  @Post("logout/all")
  @ResponseMessage("Logged out of all devices.")
  logoutAll(@Body() dto: LogoutAllDto) {
    return this.authService.logoutAll(dto);
  }

  @Post("password/forgot")
  @Public()
  @ResponseMessage("Email has been sent.")
  passwordForgot(@Body() dto: ForgotDto) {
    return this.authService.passwordForgot(dto);
  }

  @Post("password/reset")
  @Public()
  @ResponseMessage("Password has been reset, please log in again.")
  passwordReset(@Body() dto: PasswordResetDto) {
    return this.authService.passwordReset(dto);
  }

  @Post("register")
  @Public()
  @ResponseMessage("Email has been sent.")
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post("register/completion")
  @Public()
  @ResponseMessage("Congratulations, registration successful.")
  async registerCompletion(@Body() dto: RegisterCompletionDto, @Res({ passthrough: true }) res: Response) {
    this.setTokenCookie(await this.authService.registerCompletion(dto), res);
  }

  @Get("token/:token")
  @Public()
  tokenPayload(@Param() dto: TokenPayloadDto) {
    return this.authService.tokenPayload(dto);
  }
}
