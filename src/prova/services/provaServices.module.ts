import { Module } from '@nestjs/common';
import { ProvaController } from '../controller/prova.controller.js';
import { UpdateDataService } from './updateData/service/updateData.service.js';
import { UpdateDataRepository } from './updateData/repository/updateData.repository.js';
import { DeleteDataService } from './deleteData/service/deleteData.service.js';
import { DeleteDataRepository } from './deleteData/repository/deleteData.repository.js';

@Module({
    controllers: [ProvaController],
    providers: [
        UpdateDataService,
        UpdateDataRepository,
        DeleteDataService,
        DeleteDataRepository,
    ],
})
export class ProvaServicesModule {}
