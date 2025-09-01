import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { GetTokenPayload, ResponseMessage } from "../decorator";
import { UserUpdateDto } from "./user.dto";
import type { UserTokenPayload } from "../types";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

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
  deleteMe(@GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.deleteMe(userTokenPayload);
  }
}
