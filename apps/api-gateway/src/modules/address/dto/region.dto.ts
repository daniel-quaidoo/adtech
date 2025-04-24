import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

// dto
import { CountryDto } from '@app/api-gateway/src/modules/address/dto/country.dto';

export class RegionDto {
  @ApiProperty({ description: 'region_id' })
  @IsString()
  region_id: string;

  @ApiProperty({ description: 'region_name' })
  @IsString()
  region_name: string;

  @ApiProperty({ description: 'country', type: [CountryDto] })
  @Type(() => CountryDto)
  country: CountryDto;

}