import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Vip } from './vip';
import { VipService } from './vip.service';
@Crud({
  model: {
    type: Vip,
  },
})
@Controller('vip')
export class VipController {
  constructor(public service: VipService) {}
}
