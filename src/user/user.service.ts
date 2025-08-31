import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserUpdateDto } from "./user.dto";
import { UserTokenPayload } from "../types";
import { BusinessException } from "../exception";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async userMe(userTokenPayload: UserTokenPayload) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userTokenPayload.id,
      },
    });

    if (!user) {
      throw new BusinessException("User does not exist.");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async userUpdate(dto: UserUpdateDto, userTokenPayload: UserTokenPayload) {
    console.log(dto, userTokenPayload);
  }
}
