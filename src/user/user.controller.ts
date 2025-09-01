import { Body, Controller, Delete, Get, Post, Put, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { GetTokenPayload, ResponseMessage } from "../decorator";
import { UserUpdateDto } from "./user.dto";
import type { UserTokenPayload } from "../types";
import { CookieService } from "../cookie/cookie.service";
import type { Response } from "express";

@Controller("user")
export class UserController {
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
  ) {}

  @Get("me")
  userMe(@GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.userMe(userTokenPayload);
  }

  @Put("me")
  @ResponseMessage("Account information updated successfully.")
  putMe(@Body() dto: UserUpdateDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.putMe(dto, userTokenPayload);
  }

  @Delete("me")
  @ResponseMessage("Account deleted")
  async deleteMe(@GetTokenPayload() userTokenPayload: UserTokenPayload, @Res({ passthrough: true }) res: Response) {
    await this.userService.deleteMe(userTokenPayload);
    this.cookieService.clearTokenCookie(res);
  }
}
