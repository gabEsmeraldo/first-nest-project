import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.js';
import { FilaProcessor } from './queue/fila.worker.js';

@Module({
    imports: [DatabaseModule],
    exports: [DatabaseModule],
    providers: [FilaProcessor],
})
export class SharedModule {}
