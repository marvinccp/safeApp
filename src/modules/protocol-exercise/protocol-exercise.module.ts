import { Module } from '@nestjs/common';
import { ProtocolExerciseService } from './protocol-exercise.service';
import { ProtocolExerciseController } from './protocol-exercise.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProtocolExercise } from './entities/protocol-exercise.entity';

@Module({
  controllers: [ProtocolExerciseController],
  providers: [ProtocolExerciseService],
  imports:[SequelizeModule.forFeature([ProtocolExercise])]
})
export class ProtocolExerciseModule {}
