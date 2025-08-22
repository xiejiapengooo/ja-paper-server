import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from 'process';
import { NestExpressApplication } from '@nestjs/platform-express';

(async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ["error", "warn"],
  });
  app.setGlobalPrefix("api");
  await app.listen(process.env.PORT as string);
})();