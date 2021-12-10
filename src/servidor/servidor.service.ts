import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Servidor } from './servidor';

@Injectable()
export class ServidorService extends TypeOrmCrudService<Servidor> {
  constructor(@InjectRepository(Servidor) repo) {
    super(repo);
  }
}
