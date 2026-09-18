import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import {  GetJsonUserDTO } from '../services/getJson/dto/getJsonUser.dto.js';
import { GetJsonService } from '../services/getJson/service/getJson.service.js';
import { GetExcelService } from '../services/getExcel/service/getExcel.service.js';
import { GetExcelDTO } from '../services/getExcel/dto/getExcel.dto.js';

@Controller('excel')
export class ExcelController {
    constructor(
        private readonly getJsonService: GetJsonService,
        private readonly getExcelService: GetExcelService,
    ) {}

    @Post('getJson')
    @UseInterceptors(FileInterceptor('file'))
    async getJson(@UploadedFile() file: Express.Multer.File): Promise<GetJsonUserDTO[]> {
        return await this.getJsonService.execute(file);
    }

    @Post('getXlsx')
    async getExcel(@Body() data: GetExcelDTO[], @Res() res: Response): Promise<void>{
        return await this.getExcelService.execute(data, res);
    }
}
