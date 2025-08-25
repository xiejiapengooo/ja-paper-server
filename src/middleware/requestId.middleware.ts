import { Request, Response, NextFunction } from "express";
import { v7 as uuidv7 } from "uuid";

export function requestIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const requestId = uuidv7();

  res.setHeader("X-Request-Id", requestId);

  next();
}
