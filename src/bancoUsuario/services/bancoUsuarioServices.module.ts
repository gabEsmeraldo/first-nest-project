import { Module } from '@nestjs/common';
import { BancoUsuarioController } from '../controller/bancoUsuario.controller.js';
import { GetUsuariosService } from './getUsuarios/service/getUsuarios.service.js';
import { GetUsuariosRepository } from './getUsuarios/repository/getUsuarios.repository.js';
import { DatabaseModule } from '../../shared/database/database.module.js';

@Module({
    imports: [DatabaseModule],
    controllers: [BancoUsuarioController],
    providers: [GetUsuariosService, GetUsuariosRepository],
})
export class BancoUsuarioServicesModule {}
