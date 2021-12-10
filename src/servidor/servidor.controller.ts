import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Servidor } from './servidor';
import { ServidorService } from './servidor.service';

@Crud({
  model: {
    type: Servidor,
  },
})
@Controller('servidor')
export class ServidorController {
  constructor(public service: ServidorService) {}
}
