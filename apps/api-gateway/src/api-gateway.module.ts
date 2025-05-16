import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

// config
import { ClientConfigModule } from "../../common/config";
// import {ssmConfig} from '../../common/services/aws/ssm/ssm.config';

// module
import { AuthModule } from "./modules/auth/auth.module";
import { DatabaseModule } from "../../common/db/database.module";
import { AddressModule } from "./modules/address/address.module";
import { BillingModule } from "./modules/billing/billing.module";
import { CityModule } from "./modules/address/city/city.module";
import { RegionModule } from "./modules/address/region/region.module";
import { TicketingModule } from "./modules/ticketing/ticketing.module";
import { ResourcesModule } from "./modules/resources/resources.module";
import { CountryModule } from "./modules/address/country/country.module";
import { BillingRoutingModule } from "./modules/billing/billing-routing.module";

// service
import { ApiGatewayService } from "./api-gateway.service";

// controllers
import { ApiGatewayController } from "./api-gateway.controller";

@Module({
  imports: [
    AuthModule,
    AddressModule,
    RegionModule,
    CityModule,
    CountryModule,
    BillingModule,
    DatabaseModule,
    ResourcesModule,
    TicketingModule,
    ClientConfigModule,
    BillingRoutingModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      //   load: [async () => ssmConfig({})],
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
