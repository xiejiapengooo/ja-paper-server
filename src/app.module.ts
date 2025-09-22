import process from "process";
import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { LoggerModule } from "./logger/logger.module";
import { MailModule } from "./mail/mail.module";
import { AuthGuard, RolesGuard } from "./guard";
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { AlsModule } from "./als/als.module";
import { ContextMiddleware, RequestMiddleware } from "./middleware";
import { ResponseInterceptor } from "./interceptor";
import { AllExceptionFilter } from "./filter";
import { UserModule } from "./user/user.module";
import { CookieService } from "./cookie/cookie.service";
import { PaperModule } from './paper/paper.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AlsModule,
    LoggerModule,
    PrismaModule,
    AuthModule,
    AlsModule,
    MailModule,
    UserModule,
    PaperModule,
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
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: false,
        skipMissingProperties: false,
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    CookieService,
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
