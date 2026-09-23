import { Injectable } from "@nestjs/common";
import { GetUsuariosRepository } from "../repository/getUsuarios.repository.js";
import { GetUsuariosDTO } from "../dto/getUsuarios.dto.js";

@Injectable()
export class GetUsuariosService{
    constructor(private readonly getUsuariosRepository: GetUsuariosRepository){}

    async execute(): Promise<GetUsuariosDTO[]>{
        return await this.getUsuariosRepository.getUsuarios();
    }
}