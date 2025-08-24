import { ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY, UserTokenPayload } from "./decorator";
import { Reflector } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtGuard extends AuthGuard("jwt") {
  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    } else if (this.config.get("SKIP_JWT_CHECK") === "true") {
      return true;
    } else {
      const token = this.getToken(context);
      const payload = parseToken<UserTokenPayload>(token);
      if (!payload) {
        return false;
      }

      if (payload.certificateType === CERTIFICATE_TYPE.LOGIN) {
        const cachedTokens: string[] = await this.cacheManager.get(`${CACHE_KEY_LOGIN_TOKEN}/${payload.userId}`);
        if (!cachedTokens || !cachedTokens.length || !cachedTokens.includes(token)) {
          return false;
        }
      }

      return super.canActivate(context) as Promise<boolean>;
    }
  }
}
