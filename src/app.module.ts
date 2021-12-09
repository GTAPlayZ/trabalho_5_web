import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServidorModule } from './servidor/servidor.module';
import { VipModule } from './vip/vip.module';
import { SuporteModule } from './suporte/suporte.module';

@Module({
  imports: [ServidorModule, VipModule, SuporteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
