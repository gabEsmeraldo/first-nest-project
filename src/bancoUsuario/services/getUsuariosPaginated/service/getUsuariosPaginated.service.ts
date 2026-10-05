import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetUsuariosPaginatedQueryDTO } from "../dto/getUsuariosPaginatedQuery.dto.js";
import { GetUsuariosPaginatedOutputDTO } from "../dto/getUsuariosPaginatedOutput.dto.js";
import { GetUsuariosPaginatedRepository } from "../repository/getUsuariosPaginated.repository.js";

@Injectable()
export class GetUsuariosPaginatedService{
    constructor(private readonly getUsuariosPaginatedRepository: GetUsuariosPaginatedRepository){}

    async execute(data: GetUsuariosPaginatedQueryDTO): Promise<GetUsuariosPaginatedOutputDTO>{
        try {
            const count = await this.getUsuariosPaginatedRepository.getUsuariosCount();
            // data.page = Math.ceil(count/data.size) > data.page ?
            // data.page : Math.ceil(count/data.size)
            data.page = Math.min(Math.ceil(count/data.size), data.page)
            return {
                total: count,
                page: data.page,
                size: data.size,
                data: await this.getUsuariosPaginatedRepository.getUsuariosPaginated(data)
            }
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}