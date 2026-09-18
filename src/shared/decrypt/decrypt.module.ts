import { Module } from '@nestjs/common';
import { DecryptService } from './services/decrypt.service.js';

@Module({
    providers: [DecryptService],
    exports: [DecryptService],
})
export class DecryptModule {}
