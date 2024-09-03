import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProtocolExerciseService } from './protocol-exercise.service';
import { CreateProtocolExerciseDto } from './dto/create-protocol-exercise.dto';
import { UpdateProtocolExerciseDto } from './dto/update-protocol-exercise.dto';

@Controller('protocol-exercise')
export class ProtocolExerciseController {
  constructor(private readonly protocolExerciseService: ProtocolExerciseService) {}

  @Post()
  create(@Body() createProtocolExerciseDto: CreateProtocolExerciseDto) {
    return this.protocolExerciseService.create(createProtocolExerciseDto);
  }

  @Get()
  findAll() {
    return this.protocolExerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.protocolExerciseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProtocolExerciseDto: UpdateProtocolExerciseDto) {
    return this.protocolExerciseService.update(+id, updateProtocolExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.protocolExerciseService.remove(+id);
  }
}
