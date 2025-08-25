import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import process from "process";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ValidationPipe } from "@nestjs/common";
import { requestIdMiddleware } from "./middleware";

(async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ["error", "warn"],
  });
  app.use(requestIdMiddleware);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      skipMissingProperties: false,
    }),
  );
  await app.listen(process.env.PORT as string);
})();
