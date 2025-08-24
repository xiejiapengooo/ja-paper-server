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

export const GetUserTokenPayload = createParamDecorator(
  (key: string | undefined, ctx: ExecutionContext): UserTokenPayload[keyof UserTokenPayload] | UserTokenPayload => {
    const request: Request = ctx.switchToHttp().getRequest();
    const user: Record<string, any> = request.user || {};
    if (key) {
      return user[key];
    } else {
      return user;
    }
  },
);
