import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { SendVerificationEmailDto } from "./dto/mail.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private config: ConfigService,
  ) {}

  async sendVerificationEmail(dto: SendVerificationEmailDto) {
    const url = `${this.config.get("WEB_HOST")}/confirm/${dto.type}?verify_token=${dto.token}&email=${dto.email}`;

    await this.mailerService.sendMail({
      to: dto.email,
      subject: "Welcome to Word3000! Confirm your Email",
      template: "./confirmation",
      context: {
        email: dto.email,
        url,
      },
    });
  }
}
