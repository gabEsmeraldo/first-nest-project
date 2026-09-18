import { Module } from '@nestjs/common';
import { ExcelController } from '../controller/excel.controller.js';
import { GetJsonService } from './getJson/service/getJson.service.js';
import { GetExcelService } from './getExcel/service/getExcel.service.js';

@Module({
    controllers: [ExcelController],
    providers: [
        GetJsonService,
        GetExcelService,
    ],
})
export class ExcelServicesModule {}
