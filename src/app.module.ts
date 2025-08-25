import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthGuard, RolesGuard } from "./guard";
import process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.ENV}`,
    }),
    PrismaModule,
    AuthModule,
  ],
  providers: [
    {
      provide: "APP_GUARD",
      useClass: AuthGuard,
    },
    {
      provide: "APP_GUARD",
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
