import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService extends ConsoleLogger {
  log(message: any, ...optionalParams: any[]) {
    super.log(message);
  }

  error(message: any, stack?: string, context?: string) {
    super.error(message);
  }

  warn(message: any, ...optionalParams: any[]) {
    // super.warn(...arguments);
  }

  debug(message: any, context?: string) {
    super.debug(message, context);
  }
}
