import { Module } from '@nestjs/common';
import { SuporteController } from './suporte.controller';
import { SuporteService } from './suporte.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suporte } from './suporte.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Suporte])],
  controllers: [SuporteController],
  providers: [SuporteService],
})
export class SuporteModule {}
