import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello() {
    const res = await this.prisma.user.findMany();
    console.log(res);
    return "Hello World!";
  }
}
