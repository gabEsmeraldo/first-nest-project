import { Module } from '@nestjs/common';
import { ExcelServicesModule } from './services/excelServices.module.js';

@Module({
    imports: [ExcelServicesModule],
    exports: [ExcelServicesModule],
})
export class ExcelModule {}
