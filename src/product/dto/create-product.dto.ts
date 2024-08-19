import { IsNumber, IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })  // Ensures that each item in the array is a string
  colors: string[];

  @IsString()
  imgUrl: string;
}
