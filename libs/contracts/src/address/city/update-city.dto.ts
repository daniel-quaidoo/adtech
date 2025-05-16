import { RegionDto } from '../region/region.dto';

export class UpdateCityDto {
  city_id?: string;
  city_name?: string;
  region_name?: string;
  country_name?: string;
  // region?: RegionDto;
}