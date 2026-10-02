import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../../../../shared/database/services/database.service.js";
import { GetUsuarioDTO } from "../dto/getUsuario.dto.js";

@Injectable()
export class GetUsuarioRepository{
    constructor(private readonly db_1: DatabaseService){}

    async getUsuario(nome: string): Promise<GetUsuarioDTO[]>{
        const sql = `
            SELECT NM_USUARIO AS NOME, DS_USUARIO AS DESCRICAO FROM TASY.USUARIO WHERE NM_USUARIO = :nome
        `;

        const binds = { nome };
        return await this.db_1.query<GetUsuarioDTO>(sql, binds);
    }
}