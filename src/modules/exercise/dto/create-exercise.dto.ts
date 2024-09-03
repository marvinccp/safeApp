import {IsNotEmpty, IsString, IsOptional, IsUrl, IsUUID} from 'class-validator';

export class CreateExerciseDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  readonly image_url?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  readonly video_url?: string;


  @IsNotEmpty()
  @IsUUID()
  readonly categoryId: string;
}
