import { Module } from '@nestjs/common';
import { MensagemController } from '../controller/mensagem.controller.js';
import { CheckMensagemMockService } from './checkMensagemMock/service/checkMensagemMock.service.js';

@Module({
    controllers: [MensagemController],
    providers: [
        CheckMensagemMockService,
    ],
})
export class MensagemServicesModule {}
