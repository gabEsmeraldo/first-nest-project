import { DatabaseService } from "../../../../shared/database/services/database.service.js";
import { GetUsuariosDTO } from "../dto/getUsuarios.dto.js";

export class GetUsuariosRepository{
    constructor(private readonly db_1: DatabaseService){}

    async getUsuarios(): Promise<GetUsuariosDTO[]>{
        const sql = `
            SELECT NM_USUARIO AS "NOME", DS_USUARIO AS "DESCRICAO" FROM TASY.USUARIO;
        `
        return await this.db_1.query<GetUsuariosDTO>(sql);
    }
}