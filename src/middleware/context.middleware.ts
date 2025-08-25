import { Injectable, NestMiddleware } from "@nestjs/common";
import { v7 as uuidv7 } from "uuid";
import { Request, Response, NextFunction } from "express";
import { AlsService } from "../als/als.service";

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  constructor(private als: AlsService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const requestId = uuidv7();
    res.setHeader("X-Request-Id", requestId);
    this.als.run(
      {
        requestId,
        headers: req.headers,
      },
      () => next(),
    );
  }
}
