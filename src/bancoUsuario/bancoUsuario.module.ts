import { Module } from '@nestjs/common';
import { BancoUsuarioServicesModule } from './services/bancoUsuarioServices.module.js';
import { DatabaseModule } from '../shared/database/database.module.js';

@Module({
    imports: [BancoUsuarioServicesModule],
    exports: [BancoUsuarioServicesModule],
})
export class BancoUsuarioModule {}
