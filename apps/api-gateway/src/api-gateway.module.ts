import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

// config
import { ClientConfigModule } from '../../common/config'
// import {ssmConfig} from '../../common/services/aws/ssm/ssm.config';

// module
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address/address.module';


// service
import { ApiGatewayService } from './api-gateway.service';

// controllers
import { ApiGatewayController } from './api-gateway.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketingModule } from './modules/ticketing/ticketing.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { BillingModule } from './modules/billing/billing.module';
import { BillingRoutingModule } from './modules/billing/billing-routing.module';

@Module({
  imports: [
    BillingRoutingModule,
    BillingModule,
    ResourcesModule,
    TicketingModule,
    AddressModule,
    AuthModule,
    ClientConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    //   load: [async () => ssmConfig({})],
    }),
    RouterModule.register([
      // {
      //   path: '',
      //   module: ''
      // }
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // using migrations now
      migrations: ['dist/migrations/*.js'],
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService]
})

export class ApiGatewayModule { }