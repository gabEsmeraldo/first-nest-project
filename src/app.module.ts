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
import { ExcelModule } from './excel/excel.module.js';
import { ProvaModule } from './prova/prova.module.js';
import { BancoUsuarioModule } from './bancoUsuario/bancoUsuario.module.js';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/database/database.module.js';
import { BullModule } from '@nestjs/bullmq'
import { FilaModule } from './fila/fila.module.js';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }), 
    BullModule.forRoot({
      connection: { host: process.env.REDIS_HOST , port: process.env.REDIS_PORT, password: process.env.REDIS_PASSWORD }
    }),
    ScheduleModule.forRoot(),
    MensagemModule,
    ValorModule,
    UsuarioModule,
    CepModule,
    SharedModule,
    PdfModule,
    AuthModule,
    ExcelModule,
    ProvaModule,
    BancoUsuarioModule,
    DatabaseModule,
    FilaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
