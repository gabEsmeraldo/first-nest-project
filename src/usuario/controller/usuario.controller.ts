import { Controller, Get, Query } from '@nestjs/common';
import { GetUsersService } from '../services/getUsers/service/getUsers.service.js';
import { GetUsersQueryDTO } from '../services/getUsers/dto/getUsersQuery.dto.js';
import { GetUsersOutputDTO } from '../services/getUsers/dto/getUsersOutput.dto.js';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly getUsersService: GetUsersService){}
    @Get()
    async getUsuarios(@Query() data: GetUsersQueryDTO): Promise<GetUsersOutputDTO>{
        return this.getUsersService.execute(data);
    }

}
