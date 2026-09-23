import { Injectable } from "@nestjs/common";
import * as fs from 'node:fs/promises';
import path from "path";

@Injectable()
export class UpdateDataRepository{
    private readonly dir_path: string;
    constructor(){
        this.dir_path = path.join(
            process.cwd(),
            'src',
            'shared',
            'files'
        ) 
    }

    async updateData<T extends string | number | boolean>(data :T): Promise<void>{
        // if (typeof data === "string") return await fs.writeFile(path.join(this.dir_path, 'nome.csv'), data.toString())
        // if (typeof data === "number") return await fs.writeFile(path.join(this.dir_path, 'valor.csv'), data.toString())
        // if (typeof data === "boolean") return await fs.writeFile(path.join(this.dir_path, 'boolean.csv'), data.toString())
        // return;
        return await fs.writeFile(path.join(this.dir_path, `${typeof data}.csv`), data.toString());
    }
}