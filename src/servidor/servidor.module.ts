import { Module } from '@nestjs/common';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servidor } from './servidor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servidor])],
  controllers: [ServidorController],
  providers: [ServidorService],
})
export class ServidorModule {}
