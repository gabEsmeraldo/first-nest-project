import { Injectable } from "@nestjs/common";
import { AddValorJsonDTO } from "../dto/addValorJson.dto.js";
import * as fs from "node:fs/promises";

@Injectable()
export class AddValorRepository {
    constructor() {}
    async addValor(valor: number, posicao: number): Promise<void> {
        const valores = await this.findAll();
        console.log(`adding ${valor} at ${posicao}`)
        return (await fs.writeFile(
            'src/valor/services/addValor/repository/data.csv', 
            JSON.stringify(
                (valores
                    .slice(0,posicao)
                    .concat(valor)
                    .concat(valores.slice(posicao,valores.length)))
                    .map(
                        (num) => {return { valor: num };})), 
            'utf-8'));
    }

    async findAll(): Promise<number[]> {
        const file = await fs.readFile('src/valor/services/addValor/repository/data.csv', 'utf-8')
        return file.trim() ? JSON.parse(file).map((objeto:AddValorJsonDTO):number => objeto.valor) : [];
    }

    // checkInsertIndex(array: number[], num: number): number{
    //     let high = array.length - 1;
    //     let low = 0;
    //     while (low <= high){
    //         let mid = Math.floor((high + low) / 2);
    //         if(array[mid] == num) return mid;
    //         else if(array[mid] > num){
    //             high = mid - 1;
    //         }else {
    //             low = mid + 1;
    //         }
    //     }
    //     return low;
    // }
}