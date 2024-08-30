import { Test, TestingModule } from '@nestjs/testing';
import { EjerciciosController } from './ejercicios.controller';
import { EjerciciosService } from './ejercicios.service';

describe('EjerciciosController', () => {
  let controller: EjerciciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjerciciosController],
      providers: [EjerciciosService],
    }).compile();

    controller = module.get<EjerciciosController>(EjerciciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
