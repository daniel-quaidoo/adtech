import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';

//entity
import { Address } from './entities/address.entity';
import { City } from './entities/city.entity';
import { Region } from './entities/region.entity';
import { Country } from './entities/country.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Address, City, Region, Country])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
