import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { FilaProcessor } from './queue/fila.worker.js';
import { FilaEventListener } from './queue/fila.eventListener.js';
import { FilaCron } from './cron/fila.cron.js';
import { BullModule } from '@nestjs/bullmq';

@Module({
    imports: [
        DatabaseModule,
        BullModule.registerQueue({ name: 'fila' }),
    ],
    exports: [DatabaseModule],
    providers: [
        FilaProcessor,
        FilaEventListener,
        FilaCron,
    ],
})
export class SharedModule {}
