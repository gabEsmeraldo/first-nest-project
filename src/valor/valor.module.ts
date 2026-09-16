import { Module } from '@nestjs/common';
import { ValorServicesModule } from './services/valorServices.module.js';

@Module({
    imports: [ValorServicesModule],
    exports: [ValorServicesModule],
})
export class ValorModule {}
