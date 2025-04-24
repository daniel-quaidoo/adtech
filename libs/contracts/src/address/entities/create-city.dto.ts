import { RegionDto } from './region.dto';

export class CreateCityDto {
  city_name: string;
  region: RegionDto;
}