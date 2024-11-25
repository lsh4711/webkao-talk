import { SwaggerUtil } from '#@/util/swagger.util';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  SwaggerUtil.runtimeSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();