import * as path from 'path';
import * as express from 'express';
import serverless from 'serverless-http';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// main.ts
import { setupSwagger } from './main-serverless';

// module
import { ApiGatewayModule } from './api-gateway.module';

// interceptors & filters
import { GlobalResponseInterceptor } from '@app/common/interceptors/global.interceptor';
import { GlobalExceptionFilter } from '@app/common/filters/global-http-exception.filter';


export async function bootstrap() {
    const app = await NestFactory.create(ApiGatewayModule);

    // Filters
    app.useGlobalFilters(new GlobalExceptionFilter());
    app.useGlobalInterceptors(new GlobalResponseInterceptor());
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    // Enable CORS
    const corsOptions: CorsOptions = {
        origin: '*',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        allowedHeaders: ['Content-Type', 'Authorization', '*'],
        credentials: true
    };
    app.enableCors(corsOptions);

    // Serve Swagger static files
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.use('/api/swagger-static', express.static(path.join(__dirname, '../node_modules/swagger-ui-dist')));

    // Setup Swagger
    setupSwagger(app);

    // Connect TCP Microservice
    // app.connectMicroservice<MicroserviceOptions>({
    // transport: Transport.TCP,
    // options: { host: '127.0.0.1', port: 3008 },
    // });

    // await app.startAllMicroservices();
    await app.init();

    return serverless(expressApp);
}
