import { RegionDto } from '../region/region.dto';

export class CityDto {
  city_id: string;
  city_name: string;
  region: RegionDto;
}