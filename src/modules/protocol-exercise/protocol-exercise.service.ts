import { Injectable } from '@nestjs/common';
import { CreateProtocolExerciseDto } from './dto/create-protocol-exercise.dto';
import { UpdateProtocolExerciseDto } from './dto/update-protocol-exercise.dto';

@Injectable()
export class ProtocolExerciseService {
  create(createProtocolExerciseDto: CreateProtocolExerciseDto) {
    return 'This action adds a new protocolExercise';
  }

  findAll() {
    return `This action returns all protocolExercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} protocolExercise`;
  }

  update(id: number, updateProtocolExerciseDto: UpdateProtocolExerciseDto) {
    return `This action updates a #${id} protocolExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} protocolExercise`;
  }
}
