import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable, isObservable } from "rxjs";
import { map } from "rxjs/operators";
import { StreamableFile } from "@nestjs/common";
import { RESPONSE_MESSAGE, StatusCode } from "../types";
import { RESPONSE_MESSAGE_KEY } from "../decorator";

export interface CommonResponse<T = any> {
  data: T;
  code: StatusCode;
  message: string;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const message = this.reflector.get<RESPONSE_MESSAGE>(RESPONSE_MESSAGE_KEY, context.getHandler()) ?? "success";

    return next.handle().pipe(
      map((data) => {
        if (
          data instanceof StreamableFile ||
          data instanceof Buffer ||
          data instanceof Uint8Array ||
          isObservable(data)
        ) {
          return data;
        }

        return {
          code: StatusCode.OK,
          message,
          data: data ?? null,
        };
      }),
    );
  }
}
