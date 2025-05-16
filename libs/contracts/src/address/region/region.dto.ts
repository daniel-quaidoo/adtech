import { CountryDto } from '../country/country.dto';

export class RegionDto {
  region_id: string;
  region_name: string;
  country: CountryDto;
}