import { CountryDto } from '../country/country.dto';

export class CreateRegionDto {
  region_name: string;
  country: CountryDto;
}