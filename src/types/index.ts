export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum StatusCode {
  OK = "ok",
  FAIL = "fail",
}

export type CommonResponse<T = any> = {
  data: T;
  code: StatusCode;
  message: string;
};

export type UserTokenPayload = {
  id: number;
  name: string;
  role: ROLES;
  exp: number;
  iat: number;
};

export type ROLE_LIST = ROLES[];

export type IS_PUBLIC = boolean;

export type RESPONSE_MESSAGE = string;
