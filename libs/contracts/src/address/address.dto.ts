import { AddressType } from '@lib/contracts/address/enums/address-type.enum';
import { CityDto } from './city/city.dto';
import { RegionDto } from './region/region.dto';
import { CountryDto } from './country/country.dto';

export class AddressDto {
  address_id: string;
  address_type: AddressType;
  primary: Boolean;
  address_1: string;
  address_2: string;
  address_postal_code: string;
  city: CityDto;
  // region: RegionDto;
  // country: CountryDto;
}