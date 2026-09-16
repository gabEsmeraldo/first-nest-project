import { GetUsersListDTO } from "./getUsersList.dto.js";

export class GetUsersOutputDTO{
    total: number;
    page: number;
    page_size: number;
    data: GetUsersListDTO[]
}