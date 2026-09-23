import { Controller, Get } from "@nestjs/common";
import { GetUsuariosService } from "../services/getUsuarios/service/getUsuarios.service.js";
import { GetUsuariosDTO } from "../services/getUsuarios/dto/getUsuarios.dto.js";

@Controller('bancoUsuario')
export class BancoUsuarioController{
    constructor(private readonly getUsuariosService: GetUsuariosService){}
    @Get()
    async getUsuarios(): Promise<GetUsuariosDTO[]>{
        return await this.getUsuariosService.execute();
    }
}