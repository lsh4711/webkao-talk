import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

export class SwaggerUtil {
  static readonly SWAGGER_URL_PATH = '/swagger';
  static readonly SCALAR_URL_PATH = '/scalar';
  static readonly config = new DocumentBuilder()
    .setTitle('webkao-talk')
    .setDescription('this is webkao-talk')
    .setVersion('0.1')
    .build();

  static runtimeSwagger(app: INestApplication) {
    const document = SwaggerModule.createDocument(app, this.config);
    SwaggerModule.setup(SwaggerUtil.SWAGGER_URL_PATH, app, document);
    app.use(
      SwaggerUtil.SCALAR_URL_PATH,
      apiReference({ spec: { content: document } }),
    );
  }
}
