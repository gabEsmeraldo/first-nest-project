import { Module } from '@nestjs/common';
import { ProvaServicesModule } from './services/provaServices.module.js';

@Module({
    imports: [ProvaServicesModule],
    exports: [ProvaServicesModule],
})
export class ProvaModule {}
