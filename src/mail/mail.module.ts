import { Global, Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "./mail.service";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { ConfigService } from "@nestjs/config";
import path from "node:path";

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const transport = config.get("MAIL_TRANSPORT") || "";
        return {
          transport,
          defaults: {
            from: config.get("MAIL_FROM"),
          },
          preview: transport.toLowerCase().includes("localhost"),
          template: {
            dir: path.resolve(__dirname, "..", "templates"),
            adapter: new PugAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
