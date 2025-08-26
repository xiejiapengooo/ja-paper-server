import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { CommonResponse, StatusCode } from "../types";
import { LoggerService } from "../logger/logger.service";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private logger: LoggerService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let result: CommonResponse = {
      code: StatusCode.FAIL,
      message: "Internal server error",
      data: null,
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse: any = exception.getResponse();

      result = {
        code: errorResponse.code ?? result.code,
        message: errorResponse.message ?? exception.message,
        data: null,
      };
    }

    this.logger.error(exception);

    response.status(status).json(result);
  }
}
