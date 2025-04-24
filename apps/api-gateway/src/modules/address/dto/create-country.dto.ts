import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCountryDto {
  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

}