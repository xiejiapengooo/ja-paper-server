import { Request } from "express";
import { PaperLevel } from "@prisma/client";

export function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(" ") ?? [];
  return type === "Bearer" ? token : undefined;
}

export function getPaperCosPath(level: PaperLevel, yearMonth: string) {
  return `papers/${level}/${yearMonth}`;
}
