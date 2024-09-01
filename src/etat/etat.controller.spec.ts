import { Test, TestingModule } from '@nestjs/testing';
import { EtatController } from './etat.controller';
import { EtatService } from './etat.service';

describe('EtatController', () => {
  let controller: EtatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtatController],
      providers: [EtatService],
    }).compile();

    controller = module.get<EtatController>(EtatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
