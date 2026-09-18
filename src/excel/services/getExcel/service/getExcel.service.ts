import { Injectable } from "@nestjs/common";
import { GetExcelDTO } from "../dto/getExcel.dto.js";
import type { Response } from 'express';
import * as XLSX from 'xlsx';

@Injectable()
export class GetExcelService{
    constructor() {}
    async execute(data: GetExcelDTO[], res: Response): Promise<void> {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Teste")

        XLSX.utils.sheet_add_aoa(worksheet, [["Nome", "Idade", "Desempregado"]], { origin: "A1"});

        const buffer = XLSX.write(workbook, { bookType: 'xlsx', compression: true, type: 'buffer' });

        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename=teste.xlsx',
            // 'Content-Length': buffer.length,
        })
        
        res.end(buffer);
    }
}