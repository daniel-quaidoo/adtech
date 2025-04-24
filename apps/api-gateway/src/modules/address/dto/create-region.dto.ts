import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
// dto
import { CountryDto } from '@app/api-gateway/src/modules/address/dto/country.dto';
export class CreateRegionDto {
  @ApiProperty({ description: 'region_name' })
  @IsString()
  region_name: string;

  @ApiProperty({ description: 'country', type: [CountryDto] })
  @IsOptional()
  @Type(() => CountryDto)
  country: CountryDto;

}