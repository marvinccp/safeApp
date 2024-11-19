import { ArrayNotEmpty, IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateProtocolExerciseDto {
  @IsNotEmpty()
  @IsUUID('all', { message: 'Protocol ID must be a valid UUID' })
  readonly protocolId: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID("4", { each: true })  
  exerciseIds: string[];
}
