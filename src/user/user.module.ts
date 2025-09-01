import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { CookieModule } from "../cookie/cookie.module";

@Module({
  imports: [CookieModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
