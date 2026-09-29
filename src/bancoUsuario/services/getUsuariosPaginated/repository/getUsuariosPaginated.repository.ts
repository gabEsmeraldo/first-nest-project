import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../../../shared/database/services/database.service.js";
import { GetUsuariosPaginatedQueryDTO } from "../dto/GetUsuariosPaginatedQuery.dto.js";
import { GetUsuariosPaginatedListDTO } from "../dto/getUsuariosPaginatedList.dto.js";

@Injectable()
export class GetUsuariosPaginatedRepository{
    constructor(private readonly db_1: DatabaseService){}
    async getUsuariosCount(): Promise<number>{
        const sql = `
            SELECT COUNT(1) AS TOTAL FROM (
                SELECT * FROM TASY.USUARIO
            )
        `
        const result = await this.db_1.query<{ total: number}>(sql);
        return result[0]?.total;
    }
    async getUsuariosPaginated(data: GetUsuariosPaginatedQueryDTO): Promise<GetUsuariosPaginatedListDTO[]>{
        const sql = `
            SELECT NM_USUARIO AS "NOME", DS_USUARIO AS "DESCRICAO" 
            FROM TASY.USUARIO
            ORDER BY NM_USUARIO
            OFFSET :init ROWS
            FETCH NEXT :rows_size ROWS ONLY
        `;

        const binds = {
            init: data.page * data.size - data.size,
            rows_size: data.size,
        }

        return await this.db_1.query<GetUsuariosPaginatedListDTO>(sql, binds);
    }
}