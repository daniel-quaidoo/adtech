import { RegionDto } from './region.dto';

export class UpdateCityDto {
  city_id?: string;
  city_name?: string;
  region?: RegionDto;
}