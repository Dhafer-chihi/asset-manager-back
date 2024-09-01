import { Test, TestingModule } from '@nestjs/testing';
import { EtatService } from './etat.service';

describe('EtatService', () => {
  let service: EtatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtatService],
    }).compile();

    service = module.get<EtatService>(EtatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
