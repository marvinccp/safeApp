import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Controller('safe/exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findAll(): Promise<Exercise[]> {
    const exercises = await this.exerciseService.findAll();
    return exercises;
  }

  @Post()
  async create(@Body() bodyDataCreate: CreateExerciseDto): Promise<Exercise> {
    const newExercise = this.exerciseService.create(bodyDataCreate);
    return newExercise;
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    const exercise = this.exerciseService.findOne(id);
    return exercise;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() bodyDataUpdate: UpdateExerciseDto,
  ) {
    return this.exerciseService.update(id, bodyDataUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseService.remove(id);
  }
}
