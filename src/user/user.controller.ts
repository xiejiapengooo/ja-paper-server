import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { GetTokenPayload, ResponseMessage } from "../decorator";
import { UserUpdateDto } from "./user.dto";
import type { UserTokenPayload } from "../types";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("me")
  userMe(@GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.userMe(userTokenPayload);
  }

  @Post("update")
  @ResponseMessage("User information updated successfully.")
  userUpdate(@Body() dto: UserUpdateDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.userService.userUpdate(dto, userTokenPayload);
  }
}
