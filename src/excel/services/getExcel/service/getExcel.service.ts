import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetExcelDTO } from "../dto/getExcel.dto.js";
import type { Response } from 'express';
import * as XLSX from 'xlsx';

@Injectable()
export class GetExcelService{
    constructor() {}
    async execute(data: GetExcelDTO[], res: Response): Promise<void> {
        try{
            data = this.validateDate(data);
            const worksheet = XLSX.utils.json_to_sheet(data);
            worksheet["!cols"] = [ { wch: data.reduce((w, r) => Math.max(w, r.nome.length), 10) } ]
            worksheet["!cols"][2] = { wch: 12 } 
            worksheet["!cols"][3] = { wch: 12 }
            
            for ( let i = 1; i <= data.length; i++) {
                worksheet[`D${i+1}`].z = "dd/mm/yyyy"
            }
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

    validateDate(data: GetExcelDTO[]): GetExcelDTO[]{
        data.forEach(element => {
            let [dia, mes, ano] = element.data.toString().split("/")
            element.data = new Date(`${ano}-${mes}-${dia} 00:00`)
            element.data = element.data.getDate() === Number(dia) &&
            element.data.getMonth() === Number(mes)-1 &&
            element.data.getFullYear() === Number(ano) ? element.data : undefined;
        });
        return data;
    }
}