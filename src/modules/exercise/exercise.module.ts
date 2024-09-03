import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exercise } from './entities/exercise.entity';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
  imports:[SequelizeModule.forFeature([Exercise])]
})
export class ExerciseModule {}
