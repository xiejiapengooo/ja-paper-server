import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: config.get("SKIP_JWT_EXPIRES_CHECK") === "true",
      secretOrKey: `${config.get("APP_SECRET")}.${config.get("ENV")}.${config.get("TARGET")}`,
    });
  }

  validate(payload) {
    return payload;
  }
}
