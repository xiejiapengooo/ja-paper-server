import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_KEY, ROLES } from "./decorator";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const handlerRoles = this.reflector.get<ROLES[]>(ROLE_KEY, context.getHandler());
    const classRoles = this.reflector.get<ROLES[]>(ROLE_KEY, context.getClass());

    if (this.config.get("SKIP_JWT_CHECK") === "true") {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    let canActivate = false;
    if (classRoles && classRoles.length) {
      canActivate = classRoles.includes(user?.role);
    } else {
      canActivate = true;
    }

    if (!canActivate) {
      throw new ForbiddenException("Permission Deny");
    }

    if (handlerRoles && handlerRoles.length) {
      canActivate = handlerRoles.includes(user?.role);
    } else {
      canActivate = true;
    }

    if (!canActivate) {
      throw new ForbiddenException("Permission Deny");
    }

    return canActivate;
  }
}
