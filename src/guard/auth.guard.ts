import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorator";
import { extractTokenFromHeader } from "../libs/utils";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      request["tokenPayload"] = await this.jwtService.verifyAsync(token, {
        secret: this.config.get("JWT_SECRET"),
      });
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
