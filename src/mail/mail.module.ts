import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { join } from "path";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        transport: config.get("MAIL_TRANSPORT"),
        defaults: {
          from: '"Word3000" <noreply@mail.word3000.com>',
        },
        template: {
          dir: join(__dirname, "templates"),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
