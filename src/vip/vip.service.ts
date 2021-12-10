import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Vip } from './vip.entity';

@Injectable()
export class VipService extends TypeOrmCrudService<Vip> {
  constructor(@InjectRepository(Vip) repo) {
    super(repo);
  }
}
