import { Body, Controller, Get, Post, Param, Res, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "../decorator";
import { type Response } from "express";
import { RegisterDto, ForgotDto, LoginDto, PasswordResetDto, RegisterCompletionDto, TokenPayloadDto } from "./auth.dto";
import { ConfigService } from "@nestjs/config";
import { Cookies } from "../decorator";
import { CookieService } from "../cookie/cookie.service";

@Controller("auth")
export class AuthController {
  constructor(
    private config: ConfigService,
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  @Post("login")
  @Public()
  @ResponseMessage("Login successful.")
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    this.cookieService.setTokenCookie(await this.authService.login(dto), res);
  }

  @Post("refresh")
  @Public()
  @ResponseMessage("Refresh successful.")
  async refresh(@Cookies("refresh_token") refreshToken: string, @Res({ passthrough: true }) res: Response) {
    this.cookieService.setTokenCookie(await this.authService.refresh(refreshToken), res);
  }

  @Post("logout")
  @ResponseMessage("Logged out.")
  async logout(@Cookies("refresh_token") refreshToken: string, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(refreshToken);
    this.cookieService.clearTokenCookie(res);
  }

  @Post("logout/all")
  @ResponseMessage("Logged out of all devices.")
  async logoutAll(@Cookies("refresh_token") refreshToken: string, @Res({ passthrough: true }) res: Response) {
    await this.authService.logoutAll(refreshToken);
    this.cookieService.clearTokenCookie(res);
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
  async passwordReset(@Body() dto: PasswordResetDto, @Res({ passthrough: true }) res: Response) {
    await this.authService.passwordReset(dto);
    this.cookieService.clearTokenCookie(res);
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
    this.cookieService.setTokenCookie(await this.authService.registerCompletion(dto), res);
  }

  @Get("token/:token")
  @Public()
  tokenPayload(@Param() dto: TokenPayloadDto) {
    return this.authService.tokenPayload(dto);
  }
}
