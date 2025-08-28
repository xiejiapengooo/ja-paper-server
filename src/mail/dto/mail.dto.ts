export class SendPasswordResetEmailDto {
  token: string;
  email: string;
  expiresIn: number;
}

export class SendRegisterEmailDto {
  token: string;
  email: string;
  expiresIn: number;
}
