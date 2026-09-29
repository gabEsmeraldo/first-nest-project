import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { GetUsuarioRepository } from "../repository/getUsuario.repository.js";
import { GetUsuarioDTO } from "../dto/getUsuario.dto.js";

@Injectable()
export class GetUsuarioService{
    constructor(private readonly getUsuarioRepository: GetUsuarioRepository){}

    async execute(nome: string): Promise<GetUsuarioDTO[]>{
        try {
            return await this.getUsuarioRepository.getUsuario(nome);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error);
        }
    }
}