import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { FilaProcessor } from './queue/fila.worker.js';
import { FilaEventListener } from './queue/fila.eventListener.js';

@Module({
    imports: [DatabaseModule],
    exports: [DatabaseModule],
    providers: [
        FilaProcessor,
        FilaEventListener,
    ],
})
export class SharedModule {}
