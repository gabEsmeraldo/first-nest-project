import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetExcelDTO } from "../dto/getExcel.dto.js";
import type { Response } from 'express';
import * as XLSX from 'xlsx';

@Injectable()
export class GetExcelService{
    constructor() {}
    async execute(data: GetExcelDTO[], res: Response): Promise<void> {
        try{
            const worksheet = XLSX.utils.json_to_sheet(data);
            worksheet["!cols"] = [ { wch: data.reduce((w, r) => Math.max(w, r.nome.length), 10) } ]
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "usuários")

            const buffer = XLSX.write(workbook, { bookType: 'xlsx', compression: true, type: 'buffer' });

            res.set({
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename=teste.xlsx',
                'Content-Length': buffer.length,
            })
            
            res.end(buffer);
        }catch (error){
            throw new InternalServerErrorException(error)
        }
    }
}