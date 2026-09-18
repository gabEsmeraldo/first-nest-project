import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MensagemModule } from './mensagem/mensagem.module.js';
import { ValorModule } from './valor/valor.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { CepModule } from './cep/cep.module.js';
import { SharedModule } from './shared/shared.module.js';
import { PdfModule } from './pdf/pdf.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    MensagemModule,
    ValorModule,
    UsuarioModule,
    CepModule,
    SharedModule,
    PdfModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
