import { Module } from '@nestjs/common';
import { UsuarioServicesModule } from './services/usuarioServices.module.js';

@Module({
  imports: [UsuarioServicesModule],
  exports: [UsuarioServicesModule],
})
export class UsuarioModule {}
