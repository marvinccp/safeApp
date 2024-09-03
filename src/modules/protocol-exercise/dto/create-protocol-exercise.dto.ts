import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateProtocolExerciseDto {
  @IsNotEmpty()
  @IsUUID('all', { message: 'Protocol ID must be a valid UUID' })
  readonly protocolId: string;

  @IsNotEmpty()
  @IsUUID('all', { message: 'Exercise ID must be a valid UUID' })
  readonly exerciseId: string;
}
