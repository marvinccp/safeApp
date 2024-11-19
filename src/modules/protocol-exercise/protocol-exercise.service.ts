import { Injectable } from '@nestjs/common';
import { CreateProtocolExerciseDto } from './dto/create-protocol-exercise.dto';
import { UpdateProtocolExerciseDto } from './dto/update-protocol-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProtocolExercise } from './entities/protocol-exercise.entity';

@Injectable()
export class ProtocolExerciseService {
  constructor(
    @InjectModel(ProtocolExercise)
    private protocolExerciseModel: typeof ProtocolExercise,
  ) {}
  create(bodyDataCreate: CreateProtocolExerciseDto) {
    const { protocolId, exerciseIds } = bodyDataCreate;

    const protocolExercises = exerciseIds.map((exerciseId) => ({
      protocolId,
      exerciseId,
    }));

    return this.protocolExerciseModel.bulkCreate(protocolExercises);
  }

  findAll() {
    const protocolExerciseInfo = this.protocolExerciseModel.findAll();
    console.log(protocolExerciseInfo);
    return protocolExerciseInfo;
  }

  findOne(id: number) {
    const protocolExerciseDetail = this.protocolExerciseModel.findByPk(id)
    return protocolExerciseDetail
  }

  update(id: number, updateProtocolExerciseDto: UpdateProtocolExerciseDto) {
    return `This action updates a #${id} protocolExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} protocolExercise`;
  }
}
