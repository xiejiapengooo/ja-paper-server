import { Controller, Get, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public, ResponseMessage } from "../decorator";
import { LoginDto, LogoutAllDto, LogoutDto, RefreshDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @Public()
  @ResponseMessage("登录成功")
  login(@Query() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("refresh")
  @Public()
  @ResponseMessage("刷新成功")
  refresh(@Query() dto: RefreshDto) {
    return this.authService.refresh(dto);
  }

  @Post("logout")
  @ResponseMessage("已退出")
  logout(@Query() dto: LogoutDto) {
    return this.authService.logout(dto);
  }

  @Post("logout/all")
  @ResponseMessage("已退出所有设备")
  logoutAll(@Query() dto: LogoutAllDto) {
    return this.authService.logoutAll(dto);
  }
}
