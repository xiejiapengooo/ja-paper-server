import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { ROLES } from "./role.decorator";

export type UserTokenPayload = {
  id: number;
  name: string;
  role: ROLES;
  exp: number;
  iat: number;
};

export const GetTokenPayload = createParamDecorator(
  <T extends Record<string, any>>(key: keyof T | undefined, ctx: ExecutionContext): T[keyof T] | T => {
    const request: Request = ctx.switchToHttp().getRequest();
    const payload = (request["tokenPayload"] || {}) as T;

    if (key) {
      return payload[key];
    }
    return payload;
  },
);
