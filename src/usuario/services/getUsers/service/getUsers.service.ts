import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetUsersOutputDTO } from "../dto/getUsersOutput.dto.js";
import { GetUsersQueryDTO } from "../dto/getUsersQuery.dto.js";
import { GetUsersListDTO } from "../dto/getUsersList.dto.js";

@Injectable()
export class GetUsersService{
    async execute(data: GetUsersQueryDTO): Promise<GetUsersOutputDTO>{
        try{
            const result = this.findAllPaginated();
            if(result.length < 1) {
                return {
                    total: 0,
                    page: data.page,
                    page_size: data.page_size,
                    data: [],
                };
            }
            return {
                total: result.length,
                page: data.page,
                page_size: data.page_size,
                data: result.slice((data.page - 1) * data.page_size, data.page * data.page_size)
            }
        }catch (error){
            throw new InternalServerErrorException;
        }
    }

    findAllPaginated(): GetUsersListDTO[]{
        return [
            { "id": 73, "name": "Camila" },
            { "id": 4, "name": "Claudio" },
            { "id": 92, "name": "Mariana" },
            { "id": 19, "name": "Ana" },
            { "id": 56, "name": "Gabriel" },
            { "id": 8, "name": "Pedro" },
            { "id": 34, "name": "Pedro" },
            { "id": 1, "name": "Clara" },
            { "id": 88, "name": "Felipe" },
            { "id": 23, "name": "Lucas" },
            { "id": 6, "name": "Marcelo" },
            { "id": 99, "name": "Carolina" },
            { "id": 14, "name": "João" },
            { "id": 51, "name": "Laura" },
            { "id": 3, "name": "Erick" },
            { "id": 79, "name": "Daniel" },
            { "id": 10, "name": "Maria" },
            { "id": 45, "name": "Miguel" },
            { "id": 2, "name": "Cleiton" },
            { "id": 96, "name": "André" },
            { "id": 68, "name": "Rafael" },
            { "id": 28, "name": "Sofia" },
            { "id": 7, "name": "Wanderley" },
            { "id": 62, "name": "Beatriz" },
            { "id": 39, "name": "Julia" },
            { "id": 5, "name": "Guilherme" },
            { "id": 83, "name": "Isabela" },
            { "id": 100, "name": "Thiago" },
            { "id": 9, "name": "Gabriel" }
        ].toSorted((a, b) => a?.id - b?.id);
    }
}