import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { AlsService } from "../als/als.service";
import { JwtService } from "@nestjs/jwt";
import { extractTokenFromHeader } from "../libs/utils";
import { UserTokenPayload } from "../decorator";
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private logger: LoggerService,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const startedAt = Date.now();

    res.on("finish", () => {
      const token = extractTokenFromHeader(req);
      const responseHeaders = res.getHeaders();
      const requestId = responseHeaders["x-request-id"];
      const ip = req.headers["x-forwarded-for"] || req.ip;
      const userAgent = req.headers["user-agent"];
      const user: UserTokenPayload | null = token ? this.jwtService.decode(token) : null;
      const username = user ? user.name : "unknown_user";
      const duration = Date.now() - startedAt;
      const data = JSON.stringify({
        requestId,
        userAgent,
        body: req.body,
        query: req.query,
      });

      this.logger.log(`+${duration}ms ${ip} ${username} ${req.method}(${res.statusCode}) ${req.originalUrl} ${data}`);
    });

    next();
  }
}
