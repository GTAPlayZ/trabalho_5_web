import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Suporte } from './suporte.entity';
import { SuporteService } from './suporte.service';
@Crud({
  model: {
    type: Suporte,
  },
})
@Controller('suporte')
export class SuporteController {
  constructor(public service: SuporteService) {}
}
