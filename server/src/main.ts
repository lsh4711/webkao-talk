import { SwaggerUtil } from '#@/util/swagger.util';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:8080',
      'http://localhost:8081',
    ],
    credentials: true,
  });
  app.enableShutdownHooks();

  SwaggerUtil.runtimeSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
