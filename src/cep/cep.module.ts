import { Module } from '@nestjs/common';
import { CepServicesModule } from './services/cepServices.module.js';

@Module({
    imports: [CepServicesModule],
    exports: [CepServicesModule],
})
export class CepModule {}
