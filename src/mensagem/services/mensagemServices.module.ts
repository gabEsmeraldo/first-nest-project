import { Module } from '@nestjs/common';
import { MensagemController } from '../controller/mensagem.controller.js';
import { CheckMensagemMockService } from './checkMensagemMock/service/checkMensagemMock.service.js';
import { DecryptService } from '../../shared/decrypt/decrypt.service.js';

@Module({
    imports: [],
    controllers: [MensagemController],
    providers: [
        CheckMensagemMockService,
        DecryptService,
    ],
})
export class MensagemServicesModule {}
