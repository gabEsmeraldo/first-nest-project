import { Module } from '@nestjs/common';
import { PdfController } from '../controller/pdf.controller.js';
import { GetPdfService } from './getPdf/service/getPdf.service.js';

@Module({
    controllers: [PdfController],
    providers: [GetPdfService],
})
export class PdfServicesModule {}
