import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database.service.js';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
