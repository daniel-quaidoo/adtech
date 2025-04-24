import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

// dto
import { CountryDto } from '@app/api-gateway/src/modules/address/dto/country.dto';

export class UpdateRegionDto {
  @ApiProperty({ required: false, description: 'region_id' })
  @IsString()
  @IsOptional()
  region_id?: string;

  @ApiProperty({ required: false, description: 'region_name' })
  @IsString()
  @IsOptional()
  region_name?: string;

  @ApiProperty({ required: false, description: 'country', type: [CountryDto] })
  @IsArray()
  @IsOptional()
  @Type(() => CountryDto)
  country?: CountryDto;

}