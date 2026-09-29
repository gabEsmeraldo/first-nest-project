import { Module } from '@nestjs/common';
import { FilaController } from '../controller/fila.controller.js';
import { AddJobService } from './postFila/service/addJob.service.js';

@Module({
    controllers: [FilaController],
    providers: [AddJobService],
})
export class FilaServicesModule {}
