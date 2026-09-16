import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MensagemModule } from './mensagem/mensagem.module.js';
import { ValorModule } from './valor/valor.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';

@Module({
  imports: [
    MensagemModule,
    ValorModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
