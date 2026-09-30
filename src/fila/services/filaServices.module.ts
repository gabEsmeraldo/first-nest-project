import { Module } from '@nestjs/common';
import { FilaController } from '../controller/fila.controller.js';
import { AddJobService } from './postFila/service/addJob.service.js';
import { BullModule } from '@nestjs/bullmq';

@Module({
    imports: [
        BullModule.registerQueue({ name: 'fila' }),
    ],
    controllers: [FilaController],
    providers: [AddJobService],
})
export class FilaServicesModule {}
