import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "../decorator";
import { ForgetDto, LoginDto, LogoutAllDto, LogoutDto, PasswordResetDto, RefreshDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @Public()
  @ResponseMessage("Login successful.")
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("refresh")
  @Public()
  @ResponseMessage("Refresh successful.")
  refresh(@Body() dto: RefreshDto) {
    return this.authService.refresh(dto);
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
  // TODO
  @ResponseMessage("")
  register(@Body() dto: LoginDto) {
    return this.authService.register(dto);
  }
}
