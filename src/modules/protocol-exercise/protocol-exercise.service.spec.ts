import { Test, TestingModule } from '@nestjs/testing';
import { ProtocolExerciseService } from './protocol-exercise.service';

describe('ProtocolExerciseService', () => {
  let service: ProtocolExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtocolExerciseService],
    }).compile();

    service = module.get<ProtocolExerciseService>(ProtocolExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
