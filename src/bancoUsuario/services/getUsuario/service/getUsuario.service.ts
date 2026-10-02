import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { GetUsuarioRepository } from "../repository/getUsuario.repository.js";
import { GetUsuarioDTO } from "../dto/getUsuario.dto.js";

@Injectable()
export class GetUsuarioService{
    constructor(private readonly getUsuarioRepository: GetUsuarioRepository){}

    async execute(nome: string): Promise<GetUsuarioDTO[]>{
        try {
            const result = await this.getUsuarioRepository.getUsuario(nome);
            if (result.length == 0) {throw new NotFoundException('Usuário não encontrado')}
            return result;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error);
        }
    }
}