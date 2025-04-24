import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
// dto
import { RegionDto } from '@app/api-gateway/src/modules/address/dto/region.dto';
export class CreateCityDto {
  @ApiProperty({ description: 'city_name' })
  @IsString()
  city_name: string;

  @ApiProperty({ description: 'region', type: [RegionDto] })
  @IsOptional()
  @Type(() => RegionDto)
  region: RegionDto;

}