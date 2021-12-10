import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Suporte } from './suporte.entity';

@Injectable()
export class SuporteService extends TypeOrmCrudService<Suporte> {
  constructor(@InjectRepository(Suporte) repo) {
    super(repo);
  }
}
