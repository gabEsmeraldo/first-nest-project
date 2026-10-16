import { Module } from '@nestjs/common';
import { CpfController } from '../controller/cpf.controller.js';
import { PostValidateCpfService } from './postValidateCpf/service/postValidateCpf.service.js';

@Module({
    controllers: [CpfController],
    providers: [
        PostValidateCpfService,
    ],
})
export class CpfServicesModule {}
