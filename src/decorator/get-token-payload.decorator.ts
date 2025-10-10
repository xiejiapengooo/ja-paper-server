import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const GetTokenPayload = createParamDecorator(
  <T extends Record<string, any>>(key: keyof T | undefined, ctx: ExecutionContext): T[keyof T] | T | void => {
    const request: Request = ctx.switchToHttp().getRequest();
    const payload = request["tokenPayload"] as T;

    return payload ? (key ? payload[key] : payload) : void 0;
  },
);
