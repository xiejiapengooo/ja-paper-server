import { EMAIL_VERIFY_TYPE } from "../../constant";

export class SendVerificationEmailDto {
  email: string;
  token: string;
  type: EMAIL_VERIFY_TYPE;
}
