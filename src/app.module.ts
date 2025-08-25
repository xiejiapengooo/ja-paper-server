import process from "process";
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { LoggerModule } from "./logger/logger.module";
import { AuthGuard, RolesGuard } from "./guard";
import { APP_GUARD } from "@nestjs/core";
import { AlsModule } from "./als/als.module";
import { ContextMiddleware, RequestMiddleware } from "./middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.ENV}`,
    }),
    AlsModule,
    LoggerModule,
    PrismaModule,
    AuthModule,
    AlsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware).forRoutes({
      path: "*path",
      method: RequestMethod.ALL,
    });
    consumer.apply(RequestMiddleware).forRoutes({
      path: "*path",
      method: RequestMethod.ALL,
    });
  }
}
