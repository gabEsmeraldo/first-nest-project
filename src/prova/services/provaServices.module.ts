import { Module } from '@nestjs/common';
import { ProvaController } from '../controller/prova.controller.js';
import { UpdateDataService } from './updateData/service/updateData.service.js';
import { UpdateDataRepository } from './updateData/repository/updateData.repository.js';

@Module({
    controllers: [ProvaController],
    providers: [
        UpdateDataService,
        UpdateDataRepository,
    ],
})
export class ProvaServicesModule {}
