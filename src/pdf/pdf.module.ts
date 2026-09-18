import { Module } from '@nestjs/common';
import { PdfServicesModule } from './services/pdfServices.module.js';

@Module({
  imports: [PdfServicesModule],
  exports: [PdfServicesModule],
})
export class PdfModule {}
