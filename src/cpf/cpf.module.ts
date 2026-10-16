import { Module } from '@nestjs/common';
import { CpfServicesModule } from './services/cpfServices.module.js';

@Module({
    imports: [CpfServicesModule],
    exports: [CpfServicesModule],
})
export class CpfModule {}
