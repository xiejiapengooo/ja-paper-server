import { Body, Controller, Delete, Get, Patch, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { GetTokenPayload, ResponseMessage } from "../decorator";
import { PatchMeDto } from "./user.dto";
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
  async getMe(@GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.getMe(userTokenPayload);
  }

  @Patch("me")
  @ResponseMessage("Account information updated successfully.")
  patchMe(@Body() dto: PatchMeDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.patchMe(dto, userTokenPayload);
  }

  @Delete("me")
  @ResponseMessage("Account deleted")
  async deleteMe(@GetTokenPayload() userTokenPayload: UserTokenPayload, @Res({ passthrough: true }) res: Response) {
    await this.userService.deleteMe(userTokenPayload);
    this.cookieService.clearTokenCookie(res);
  }
}
