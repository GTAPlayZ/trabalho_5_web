import { Module } from '@nestjs/common';
import { VipController } from './vip.controller';
import { VipService } from './vip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vip } from './vip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vip])],
  controllers: [VipController],
  providers: [VipService],
})
export class VipModule {}
