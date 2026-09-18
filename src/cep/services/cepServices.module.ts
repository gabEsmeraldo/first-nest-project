import { Module } from '@nestjs/common';
import { CepController } from '../controller/cep.controller.js';
import { CheckCepValidService } from './checkCepValid/service/checkCepValid.service.js';
import { viaCepProviders } from '../../shared/viacep/http/viaCep.providers.js';

@Module({
    controllers: [CepController],
    providers: [
        CheckCepValidService,
        ...viaCepProviders,
    ],
})
export class CepServicesModule {}
