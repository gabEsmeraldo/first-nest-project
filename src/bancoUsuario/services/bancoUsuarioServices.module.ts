import { Module } from '@nestjs/common';
import { BancoUsuarioController } from '../controller/bancoUsuario.controller.js';
import { GetUsuariosService } from './getUsuarios/service/getUsuarios.service.js';
import { GetUsuariosRepository } from './getUsuarios/repository/getUsuarios.repository.js';
import { DatabaseModule } from '../../shared/database/database.module.js';
import { GetUsuarioService } from './getUsuario/service/getUsuario.service.js';
import { GetUsuarioRepository } from './getUsuario/repository/getUsuario.repository.js';
import { GetUsuariosPaginatedService } from './getUsuariosPaginated/service/getUsuariosPaginated.service.js';
import { GetUsuariosPaginatedRepository } from './getUsuariosPaginated/repository/getUsuariosPaginated.repository.js';

@Module({
    imports: [DatabaseModule],
    controllers: [BancoUsuarioController],
    providers: [
        GetUsuariosService,
        GetUsuariosRepository,
        GetUsuarioService,
        GetUsuarioRepository,
        GetUsuariosPaginatedService,
        GetUsuariosPaginatedRepository,
    ],
})
export class BancoUsuarioServicesModule {}
