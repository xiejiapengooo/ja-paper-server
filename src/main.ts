import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import process from "process";
import { NestExpressApplication } from "@nestjs/platform-express";
import { LoggerService } from "./logger/logger.service";

(async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(LoggerService));
  app.setGlobalPrefix("api");
  await app.listen(process.env.PORT as string);
})();
