import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "@prisma/client";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LogoutDto {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export class LogoutAllDto {
  @IsString()
  @IsNotEmpty()
  userId: User["id"];
}

export class ForgotDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class PasswordResetDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class RegisterCompletionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}

export class TokenPayloadDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}
