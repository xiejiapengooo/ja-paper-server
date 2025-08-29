import { User, UserRole } from "@prisma/client";

export enum StatusCode {
  OK = "ok",
  FAIL = "fail",
  INVALID_CREDENTIALS = "invalid_credentials",
}

export type CommonResponse<T = any> = {
  data: T;
  code: StatusCode;
  message: string;
};

export type UserTokenPayload = {
  id: User["id"];
  name: User["name"];
  role: UserRole;
};

export type PasswordResetTokenPayload = {
  userId: User["id"];
  email: User["email"];
};

export type RegisterTokenPayload = {
  userId: User["id"];
  email: User["email"];
};

export type ROLE_LIST = UserRole[];

export type IS_PUBLIC = boolean;

export type RESPONSE_MESSAGE = string;
