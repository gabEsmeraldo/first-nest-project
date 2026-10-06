import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { FilaProcessor } from './queue/fila.worker.js';
import { FilaEventListener } from './queue/fila.eventListener.js';
import { FilaCron } from './cron/fila.cron.js';
import { BullModule } from '@nestjs/bullmq';
import { ConsumerProviders } from './queue/http/consumer.providers.js';

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
        ...ConsumerProviders,
    ],
})
export class SharedModule {}
