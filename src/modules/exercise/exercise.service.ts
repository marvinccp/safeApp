import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

import { InjectModel } from '@nestjs/sequelize';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(Exercise)
    private exerciseModel: typeof Exercise,
  ) {}

  async findAll(): Promise<Exercise[]> {
    const exercises = await this.exerciseModel.findAll();
    return exercises;
  }

  async create(bodyDataCreate: CreateExerciseDto): Promise<Exercise> {
    const newExercise = await this.exerciseModel.create(bodyDataCreate);
    return newExercise;
  }

  async findOne(id: string): Promise<Exercise> {
    const exercise = await this.exerciseModel.findByPk(id);
    return exercise;
  }

  async update(
    id: string,
    bodyDataUpdate: UpdateExerciseDto,
  ): Promise<Exercise> {
    const [affectedRows, [updateExercise]] = await this.exerciseModel.update(
      bodyDataUpdate,
      {
        where: { id },
        returning: true,
      },
    );

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }

    return updateExercise;
  }

  async remove(id: string) {
    const exerciseToRemove = await this.exerciseModel.findByPk(id);
    if (!exerciseToRemove) {
      throw new NotFoundException('Not found');
    }

    const affectedRows = await this.exerciseModel.destroy({
      where: { id },
    });

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }
    return { succes: true, message: `Exercise with id: ${id}, was removed` };
  }
}
