import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "../decorator";
import { type Response } from "express";
import {
  RegisterDto,
  ForgetDto,
  LoginDto,
  LogoutAllDto,
  LogoutDto,
  PasswordResetDto,
  RefreshDto,
  RegisterCompletionDto,
} from "./auth.dto";
import ms from "ms";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
  constructor(
    private config: ConfigService,
    private authService: AuthService,
  ) {}

  private setTokenCookie({ accessToken, refreshToken }, res: Response) {
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: ms(this.config.get("ACCESS_TOKEN_EXPIRES")),
    });

    res.cookie("refreshToken", refreshToken, {
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
  async refresh(@Body() dto: RefreshDto, @Res({ passthrough: true }) res: Response) {
    this.setTokenCookie(await this.authService.refresh(dto), res);
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

  @Post("password/forget")
  @Public()
  @ResponseMessage("Email has been sent.")
  passwordForget(@Body() dto: ForgetDto) {
    return this.authService.passwordForget(dto);
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
  registerCompletion(@Body() dto: RegisterCompletionDto) {
    return this.authService.registerCompletion(dto);
  }
}
