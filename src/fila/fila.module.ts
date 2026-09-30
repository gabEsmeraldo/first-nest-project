import { Module } from '@nestjs/common';
import { FilaServicesModule } from './services/filaServices.module.js';

@Module({
  imports: [
    FilaServicesModule,
  ],
  exports: [FilaServicesModule],
})
export class FilaModule {}