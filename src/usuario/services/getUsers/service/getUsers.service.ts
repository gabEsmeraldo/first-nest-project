import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetUsersOutputDTO } from "../dto/getUsersOutput.dto.js";
import { GetUsersQueryDTO } from "../dto/getUsersQuery.dto.js";
import { GetUsersListDTO } from "../dto/getUsersList.dto.js";

@Injectable()
export class GetUsersService{
    async execute(data: GetUsersQueryDTO): Promise<GetUsersOutputDTO>{
        try{
            const result = this.findAllPaginated();
            // if((data.page - 1) * data.page_size > result.length){
            //     const page = Math.ceil(result.length/data.page_size)
            //     return {
            //         total: result.length,
            //         page: page,
            //         page_size: data.page_size,
            //         data: result.slice((page - 1) * data.page_size, page * data.page_size)
            //     }
            // }
            // data.page = (data.page - 1) * data.page_size > result.length ? Math.ceil(result.length/data.page_size) : data.page
            data.page = Math.ceil(result.length/data.page_size) > data.page ?
            data.page : Math.ceil(result.length/data.page_size)
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
        // return [
        //     { "id": 73, "name": "Camila" },
        //     { "id": 4, "name": "Claudio" },
        //     { "id": 92, "name": "Mariana" },
        //     { "id": 19, "name": "Ana" },
        //     { "id": 56, "name": "Gabriel" },
        //     { "id": 8, "name": "Pedro" },
        //     { "id": 34, "name": "Pedro" },
        //     { "id": 1, "name": "Clara" },
        //     { "id": 88, "name": "Felipe" },
        //     { "id": 23, "name": "Lucas" },
        //     { "id": 6, "name": "Marcelo" },
        //     { "id": 99, "name": "Carolina" },
        //     { "id": 14, "name": "João" },
        //     { "id": 51, "name": "Laura" },
        //     { "id": 3, "name": "Erick" },
        //     { "id": 79, "name": "Daniel" },
        //     { "id": 10, "name": "Maria" },
        //     { "id": 45, "name": "Miguel" },
        //     { "id": 2, "name": "Cleiton" },
        //     { "id": 96, "name": "André" },
        //     { "id": 68, "name": "Rafael" },
        //     { "id": 28, "name": "Sofia" },
        //     { "id": 7, "name": "Wanderley" },
        //     { "id": 62, "name": "Beatriz" },
        //     { "id": 39, "name": "Julia" },
        //     { "id": 5, "name": "Guilherme" },
        //     { "id": 83, "name": "Isabela" },
        //     { "id": 100, "name": "Thiago" },
        //     { "id": 9, "name": "Gabriel" },
        //     { "id": 101, "name": "Leonardo" },
        //     { "id": 201, "name": "Jeff" }
        // ].toSorted((a, b) => a?.id - b?.id);
        return [
            { "id": 1, "name": "Clara" },
            { "id": 2, "name": "Cleiton" },
            { "id": 3, "name": "Erick" },
            { "id": 4, "name": "Claudio" },
            { "id": 5, "name": "Guilherme" },
            { "id": 6, "name": "Marcelo" },
            { "id": 7, "name": "Wanderley" },
            { "id": 8, "name": "Pedro" },
            { "id": 9, "name": "Gabriel" },
            { "id": 10, "name": "Maria" },
            { "id": 11, "name": "João" },
            { "id": 12, "name": "Laura" },
            { "id": 13, "name": "Ana" },
            { "id": 14, "name": "Julia" },
            { "id": 15, "name": "Pedro" },
            { "id": 16, "name": "Lucas" },
            { "id": 17, "name": "Miguel" },
            { "id": 18, "name": "Sofia" },
            { "id": 19, "name": "Beatriz" },
            { "id": 20, "name": "Gabriel" },
            { "id": 21, "name": "Guilherme" },
            { "id": 22, "name": "Camila" },
            { "id": 23, "name": "Daniel" },
            { "id": 24, "name": "Felipe" },
            { "id": 25, "name": "Isabela" },
            { "id": 26, "name": "Rafael" },
            { "id": 27, "name": "Mariana" },
            { "id": 28, "name": "Carolina" },
            { "id": 29, "name": "Thiago" },
            { "id": 30, "name": "Leonardo" },
            { "id": 31, "name": "André" }
        ].toSorted((a, b) => a?.id - b?.id);
    }
}