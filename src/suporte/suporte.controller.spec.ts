import { Test, TestingModule } from '@nestjs/testing';
import { SuporteController } from './suporte.controller';

describe('SuporteController', () => {
  let controller: SuporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuporteController],
    }).compile();

    controller = module.get<SuporteController>(SuporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
