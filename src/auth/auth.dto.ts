import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserTokenPayload } from "../types";
import { User } from "@prisma/client";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RefreshDto {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
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
