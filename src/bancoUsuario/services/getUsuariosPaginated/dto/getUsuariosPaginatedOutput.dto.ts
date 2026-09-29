import { GetUsuariosPaginatedListDTO } from "./getUsuariosPaginatedList.dto.js";

export class GetUsuariosPaginatedOutputDTO{
    total: number;
    page: number;
    size: number;
    data: GetUsuariosPaginatedListDTO[];
}