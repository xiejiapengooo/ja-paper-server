import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserUpdateDto } from "./user.dto";
import { UserTokenPayload } from "../types";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async userMe(userTokenPayload: UserTokenPayload) {
    console.log(userTokenPayload);
  }

  async userUpdate(dto: UserUpdateDto, userTokenPayload: UserTokenPayload) {
    console.log(dto, userTokenPayload);
  }
}
