import { Module } from '@nestjs/common';
import { ValorController } from '../controller/valor.controller.js';
import { AddValorService } from './addValor/service/addValor.service.js';
import { AddValorRepository } from './addValor/repository/addValor.repository.js';

@Module({
    controllers: [ValorController],
    providers: [
        AddValorService,
        AddValorRepository,
    ],
})
export class ValorServicesModule {}
