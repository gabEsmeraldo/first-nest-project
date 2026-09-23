import { Injectable } from "@nestjs/common";
import path from "node:path";
import * as fs from 'node:fs/promises';

@Injectable()
export class DeleteDataRepository {
    private readonly dir_path: string;
    constructor(){
        this.dir_path = path.join(
            process.cwd(),
            'src',
            'shared',
            'files'
        ) 
    }
    async deleteData(data: string): Promise<void>{
        return await fs.truncate(path.join(this.dir_path, data), 0);
    }

    async deleteFile(data: string): Promise<void>{
        return await fs.unlink(path.join(this.dir_path, data));
    }

    async checkFileEmpty(data: string): Promise<boolean>{
        return (await fs.readFile(path.join(this.dir_path, data), 'utf8')).length == 0
    }

    // async checkFile
}