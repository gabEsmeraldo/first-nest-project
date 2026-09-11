import { Module } from '@nestjs/common';
import { MensagemServicesModule } from './services/mensagemServices.module.js';

@Module({
    imports: [MensagemServicesModule],
    exports: [MensagemServicesModule],
})
export class MensagemModule {}
