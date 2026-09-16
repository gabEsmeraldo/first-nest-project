import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { AddValorInputDTO } from "../dto/addValor.dto.js";
import { AddValorRepository } from "../repository/addValor.repository.js";

@Injectable()
export class AddValorService {
    constructor(private readonly repository: AddValorRepository) {}
    async execute(data: AddValorInputDTO): Promise<void> {
        try {
            await this.repository.addValor(data.valor);
            await this.logValores(data.ordem);
        } catch(error) {
            throw new InternalServerErrorException(error);
        }
    }

    async logValores(ordem: string): Promise<void>{
        const valores = await this.repository.findAll();
        console.log('Valores:');
        try{
            switch (ordem) {
            case "crescente":
                valores.map(element => console.log(element))
                break;
            case "decrescente":
                valores.toReversed().map(element => console.log(element))
                break;
            }
        }catch (error){
            throw new InternalServerErrorException(error)
        }
    }
}