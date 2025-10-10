import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorator";
import { IS_PUBLIC } from "../types";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<IS_PUBLIC>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request: Request = context.switchToHttp().getRequest();
    const token = request.cookies?.["access_token"];
    if (!token && !isPublic) {
      throw new UnauthorizedException();
    }

    try {
      request["tokenPayload"] = await this.jwtService.verifyAsync(token);
    } catch {
      if (!isPublic) {
        throw new UnauthorizedException();
      }
    }

    return true;
  }
}
