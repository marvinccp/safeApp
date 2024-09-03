import { Test, TestingModule } from '@nestjs/testing';
import { ProtocolExerciseController } from './protocol-exercise.controller';
import { ProtocolExerciseService } from './protocol-exercise.service';

describe('ProtocolExerciseController', () => {
  let controller: ProtocolExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtocolExerciseController],
      providers: [ProtocolExerciseService],
    }).compile();

    controller = module.get<ProtocolExerciseController>(ProtocolExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
