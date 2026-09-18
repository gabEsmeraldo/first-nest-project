import { Module } from '@nestjs/common';
import { MensagemController } from '../controller/mensagem.controller.js';
import { CheckMensagemMockService } from './checkMensagemMock/service/checkMensagemMock.service.js';
import { DecryptModule } from '../../shared/decrypt/decrypt.module.js';

@Module({
    imports: [DecryptModule],
    controllers: [MensagemController],
    providers: [
        CheckMensagemMockService,
    ],
})
export class MensagemServicesModule {}
