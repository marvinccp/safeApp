import {IsNotEmpty, IsString, IsOptional} from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly description?: string;
}
