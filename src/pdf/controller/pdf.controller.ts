import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { GetPdfService } from '../services/getPdf/service/getPdf.service.js';
import type { Response } from 'express';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard.js';

@Controller('pdf')
export class PdfController {
    constructor(private readonly getPdfService: GetPdfService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getPdfFile(@Res() res: Response): Promise<void>{
        const buffer = await this.getPdfService.execute();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=teste.pdf',
            'Content-Length': buffer.length,
        })

        res.end(buffer);
    }
}
