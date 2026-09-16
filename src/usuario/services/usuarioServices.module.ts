import { Module } from '@nestjs/common';
import { GetUsersService } from './getUsers/service/getUsers.service.js';
import { UsuarioController } from '../controller/usuario.controller.js';

@Module({
    controllers: [UsuarioController],
    providers: [GetUsersService],
})
export class UsuarioServicesModule {}
