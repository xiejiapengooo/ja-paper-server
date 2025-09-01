import { Injectable } from "@nestjs/common";
import { CookieOptions } from "express-serve-static-core";
import type { Response } from "express";
import ms from "ms";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CookieService {
  constructor(private config: ConfigService) {}

  getTokenCookieOptions(): CookieOptions {
    return {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    };
  }

  clearTokenCookie(res: Response) {
    res.clearCookie("access_token", this.getTokenCookieOptions());
    res.clearCookie("refresh_token", this.getTokenCookieOptions());
  }

  setTokenCookie({ accessToken, refreshToken }, res: Response) {
    res.cookie("access_token", accessToken, {
      ...this.getTokenCookieOptions(),
      maxAge: ms(this.config.get("ACCESS_TOKEN_EXPIRES")),
    });
    res.cookie("refresh_token", refreshToken, {
      ...this.getTokenCookieOptions(),
      maxAge: ms(this.config.get("REFRESH_TOKEN_EXPIRES")),
    });
  }
}
