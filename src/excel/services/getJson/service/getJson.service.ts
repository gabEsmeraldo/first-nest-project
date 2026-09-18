import { Injectable, InternalServerErrorException } from "@nestjs/common";
import * as XLSX from 'xlsx'
import { GetJsonUserDTO } from "../dto/getJsonUser.dto.js";

@Injectable()
export class GetJsonService{
    constructor() {}
    async execute(file: Express.Multer.File): Promise<GetJsonUserDTO[]> {
        return await this.fileToJson(file);
    }

    async fileToJson(file: Express.Multer.File): Promise<GetJsonUserDTO[]>{
        try{
            const workbook = XLSX.read(file.buffer)
            var first_sheet = workbook.Sheets[workbook.SheetNames[0]];
            return XLSX.utils.sheet_to_json(first_sheet, {header: 2}) as GetJsonUserDTO[]
        }catch(error){
            throw new InternalServerErrorException(error);
        }
    }
}