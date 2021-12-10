import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuporteModule } from './suporte/suporte.module';
import { VipModule } from './vip/vip.module';
import { ServidorModule } from './servidor/servidor.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SuporteModule,
    VipModule,
    ServidorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
