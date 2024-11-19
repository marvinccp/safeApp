import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProtocolDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
  
}