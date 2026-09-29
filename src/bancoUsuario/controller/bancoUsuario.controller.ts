import { Controller, Get, Param, Query } from "@nestjs/common";
import { GetUsuariosService } from "../services/getUsuarios/service/getUsuarios.service.js";
import { GetUsuariosDTO } from "../services/getUsuarios/dto/getUsuarios.dto.js";
import { GetUsuarioDTO } from "../services/getUsuario/dto/getUsuario.dto.js";
import { GetUsuarioService } from "../services/getUsuario/service/getUsuario.service.js";
import { GetUsuariosPaginatedService } from "../services/getUsuariosPaginated/service/getUsuariosPaginated.service.js";
import { GetUsuariosPaginatedQueryDTO } from "../services/getUsuariosPaginated/dto/GetUsuariosPaginatedQuery.dto.js";
import { GetUsuariosPaginatedOutputDTO } from "../services/getUsuariosPaginated/dto/getUsuariosPaginatedOutput.dto.js";

@Controller('bancoUsuario')
export class BancoUsuarioController{
    constructor(
        private readonly getUsuariosService: GetUsuariosService,
        private readonly getUsuarioService: GetUsuarioService,
        private readonly getUsuariosPaginatedService: GetUsuariosPaginatedService,

    ){}

    @Get('all')
    async getUsuarios(): Promise<GetUsuariosDTO[]>{
        return await this.getUsuariosService.execute();
    }

    @Get('/findOne/:nome')
    async getUsuario(@Param('nome') nome: string): Promise<GetUsuarioDTO[]>{
        return await this.getUsuarioService.execute(nome);
    }

    @Get('paginated')
    async getUsuariosPaginated(@Query() data: GetUsuariosPaginatedQueryDTO): Promise<GetUsuariosPaginatedOutputDTO>{
        return await this.getUsuariosPaginatedService.execute(data);
    }
}