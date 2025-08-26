import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_KEY } from "../decorator";
import { Request } from "express";
import { ROLE_LIST } from "../types";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<ROLE_LIST>(ROLE_KEY, [context.getHandler(), context.getClass()]);
    const request: Request = context.switchToHttp().getRequest();
    const tokenPayload = request["tokenPayload"] || {};
    if (roles && roles.length) {
      return roles.includes(tokenPayload.role);
    } else {
      return true;
    }
  }
}
