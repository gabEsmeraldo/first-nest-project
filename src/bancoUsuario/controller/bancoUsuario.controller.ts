import { Controller, Get, Param } from "@nestjs/common";
import { GetUsuariosService } from "../services/getUsuarios/service/getUsuarios.service.js";
import { GetUsuariosDTO } from "../services/getUsuarios/dto/getUsuarios.dto.js";
import { GetUsuarioDTO } from "../services/getUsuario/dto/getUsuario.dto.js";
import { GetUsuarioService } from "../services/getUsuario/service/getUsuario.service.js";

@Controller('bancoUsuario')
export class BancoUsuarioController{
    constructor(
        private readonly getUsuariosService: GetUsuariosService,
        private readonly getUsuarioService: GetUsuarioService,
    ){}
    @Get()
    async getUsuarios(): Promise<GetUsuariosDTO[]>{
        return await this.getUsuariosService.execute();
    }

    @Get('/:nome')
    async getUsuario(@Param('nome') nome: string): Promise<GetUsuarioDTO[]>{
        return await this.getUsuarioService.execute(nome);
    }
}