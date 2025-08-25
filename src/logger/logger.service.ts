import { ConsoleLogger, Injectable } from "@nestjs/common";
import { AlsService } from "../als/als.service";

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(private als: AlsService) {
    super({
      logLevels: ["error", "warn", "debug", "log"],
    });
  }

  messageFormat(data: any) {
    const requestId = this.als.getStore()?.requestId;
    let message = "";
    if (typeof data === "string") {
      message = data;
    } else if (data instanceof Error) {
      message = `${data.message}\n${data.stack}`;
    } else if (typeof data === "object" && data !== null) {
      try {
        message = JSON.stringify(data, null, 2);
      } catch (e) {
        message = data;
      }
    } else {
      message = String(data);
    }
    return `${requestId ? `[${requestId}]` : ""}${message}`;
  }

  log(message: any) {
    super.log(this.messageFormat(message));
  }

  error(error: Error) {
    super.error(this.messageFormat(error));
  }

  warn(message: any) {
    super.warn(this.messageFormat(message));
  }

  debug(message: any) {
    super.debug(this.messageFormat(message));
  }
}
