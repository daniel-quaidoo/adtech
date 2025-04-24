import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CountryDto {
  @ApiProperty({ description: 'country_id' })
  @IsString()
  country_id: string;

  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

}