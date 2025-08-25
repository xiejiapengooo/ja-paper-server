// import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
// import { Request, Response, NextFunction } from "express";
// import { JwtService } from "@nestjs/jwt";
// import { UserTokenPayload } from "../auth/decorator";
//
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   private readonly logger = new Logger(LoggerMiddleware.name);
//   private readonly jwt = new JwtService();
//   use(req: Request, res: Response, next: NextFunction) {
//     const startedAt = Date.now();
//
//     res.on("finish", () => {
//       const responseHeaders = res.getHeaders();
//       const requestId = responseHeaders["x-request-id"];
//       const user = this.jwt.decode(
//         req.headers.authorization ? req.headers.authorization.split(" ")[1] : "",
//       ) as UserTokenPayload | null;
//       const username = user ? user.username : "未知";
//       const ip = req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || req.ip;
//       const userAgent = req.headers["user-agent"];
//       const duration = Date.now() - startedAt;
//       const data = JSON.stringify({
//         userAgent,
//         body: req.body,
//         query: req.query,
//       });
//
//       this.logger.debug(
//         `+${duration}ms [${ip} - ${username} - ${requestId}] ${req.method}(${res.statusCode}) ${req.originalUrl}\n ${data} `,
//       );
//     });
//
//     next();
//   }
// }
