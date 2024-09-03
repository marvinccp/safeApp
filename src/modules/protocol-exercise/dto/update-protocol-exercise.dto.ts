import { PartialType } from '@nestjs/mapped-types';
import { CreateProtocolExerciseDto } from './create-protocol-exercise.dto';

export class UpdateProtocolExerciseDto extends PartialType(
  CreateProtocolExerciseDto,
) {}
