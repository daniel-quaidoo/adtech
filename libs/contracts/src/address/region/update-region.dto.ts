import { CountryDto } from "../country/country.dto";

export class UpdateRegionDto {
  region_id?: string;
  region_name?: string;
  country?: CountryDto;
}