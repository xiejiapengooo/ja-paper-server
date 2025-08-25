import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_KEY, ROLES } from "../decorator";
import { Request } from "express";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const handlerRoles = this.reflector.get<ROLES[]>(ROLE_KEY, context.getHandler());
    const classRoles = this.reflector.get<ROLES[]>(ROLE_KEY, context.getClass());

    const request: Request = context.switchToHttp().getRequest();
    const tokenPayload = request["tokenPayload"] || {};
    let canActivate = false;
    if (classRoles && classRoles.length) {
      canActivate = classRoles.includes(tokenPayload.role);
    } else {
      canActivate = true;
    }

    if (!canActivate) {
      throw new ForbiddenException("Permission Deny");
    }

    if (handlerRoles && handlerRoles.length) {
      canActivate = handlerRoles.includes(tokenPayload.role);
    } else {
      canActivate = true;
    }

    if (!canActivate) {
      throw new ForbiddenException("Permission Deny");
    }

    return canActivate;
  }
}
