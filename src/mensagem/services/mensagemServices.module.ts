import { Module } from '@nestjs/common';
import { MensagemController } from '../controller/mensagem.controller.js';
import { CheckMensagemMockService } from './checkMensagemMock/service/checkMensagemMock.service.js';
import { DecryptMensagemService } from './decryptMensagem/decryptMensagem.service.js';
import { GetMensagemMockService } from './getMensagemMock/service/getMensagemMock.service.js';

@Module({
    controllers: [MensagemController],
    providers: [
        CheckMensagemMockService,
        DecryptMensagemService,
        GetMensagemMockService,
    ],
})
export class MensagemServicesModule {}
