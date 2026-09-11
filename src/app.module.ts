import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MensagemModule } from './mensagem/mensagem.module.js';

@Module({
  imports: [
    MensagemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
