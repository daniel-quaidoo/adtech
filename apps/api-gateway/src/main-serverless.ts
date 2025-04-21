import { INestApplication } from '@nestjs/common';
import { Callback, Context, Handler } from 'aws-lambda';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// module

// filters
import { bootstrap } from './bootstrap';

let server: Handler;

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);

export async function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle('API')
        .setDescription('API description')
        .setVersion('0.0.0.1')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document, { swaggerOptions: { useGlobalPrefix: false } });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback);
};