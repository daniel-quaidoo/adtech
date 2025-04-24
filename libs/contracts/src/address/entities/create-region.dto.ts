import { CountryDto } from './country.dto';

export class CreateRegionDto {
  region_name: string;
  country: CountryDto;
}