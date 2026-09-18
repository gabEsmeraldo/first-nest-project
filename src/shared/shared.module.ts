import { Module } from '@nestjs/common';
import { DecryptModule } from './decrypt/decrypt.module.js';

@Module({
    imports: [DecryptModule],
    exports: [DecryptModule],
})
export class SharedModule {}
