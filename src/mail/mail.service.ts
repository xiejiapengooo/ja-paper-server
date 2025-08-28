import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { SendPasswordResetEmailDto, SendRegisterEmailDto } from "./dto/mail.dto";
import ms from "ms";

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private config: ConfigService,
  ) {}

  async sendPasswordResetEmail(dto: SendPasswordResetEmailDto) {
    const link = `${this.config.get("WEB_HOST")}/password/reset/?verify_token=${dto.token}`;
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Reset your password",
      template: "./password-reset",
      context: {
        link,
        expiresIn: ms(ms(dto.expiresIn), { long: true }),
      },
    });
  }

  async sendRegisterEmail(dto: SendRegisterEmailDto) {
    const link = `${this.config.get("WEB_HOST")}/register?verify_token=${dto.token}`;
    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Complete your registration",
      template: "./register",
      context: {
        link,
        expiresIn: ms(ms(dto.expiresIn), { long: true }),
      },
    });
  }
}
