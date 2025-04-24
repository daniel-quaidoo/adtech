import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

// dto
import { RegionDto } from '@app/api-gateway/src/modules/address/dto/region.dto';

export class CityDto {
  @ApiProperty({ description: 'city_id' })
  @IsString()
  city_id: string;

  @ApiProperty({ description: 'city_name' })
  @IsString()
  city_name: string;

  @ApiProperty({ description: 'region', type: [RegionDto] })
  @Type(() => RegionDto)
  region: RegionDto;

}