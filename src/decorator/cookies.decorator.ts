import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from "express";

export const Cookies = createParamDecorator(
  (key: string | undefined, ctx: ExecutionContext): string | Record<string, string> | undefined => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const cookies = request.cookies || {};

    return key ? cookies[key] : cookies;
  },
);
