import { HttpException, HttpStatus } from "@nestjs/common";
import { StatusCode } from "../types";

export class BusinessException extends HttpException {
  constructor(message: string, code = StatusCode.FAIL) {
    super({ code, message }, HttpStatus.BAD_REQUEST);
  }
}
