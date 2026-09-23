import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DeleteDataRepository } from "../repository/deleteData.repository.js";

@Injectable()
export class DeleteDataService {
    constructor(private readonly deleteDataRepository: DeleteDataRepository){}
    
    async execute(data: string): Promise<void> {
        try {
            return await this.deleteDataRepository.checkFileEmpty(`${data}.csv`) ? 
            await this.deleteDataRepository.deleteFile(`${data}.csv`) : 
            await this.deleteDataRepository.deleteData(`${data}.csv`)
        } catch (error){
            throw new InternalServerErrorException(error);
        }
    }
}