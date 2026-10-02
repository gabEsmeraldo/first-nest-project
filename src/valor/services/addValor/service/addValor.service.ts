import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { AddValorInputDTO } from "../dto/addValor.dto.js";
import { AddValorRepository } from "../repository/addValor.repository.js";

@Injectable()
export class AddValorService {
    constructor(private readonly addValorRepository: AddValorRepository) {}
    async execute(data: AddValorInputDTO): Promise<void> {
        try {
            const valores = await this.addValorRepository.findAll();
            let posicao = 0;
            while(valores[posicao] < data.valor){posicao++}
            await this.addValorRepository.addValor(data.valor, posicao);
            await this.logValores(data.ordem);
        } catch(error) {
            throw new InternalServerErrorException(error);
        }
    }

    async logValores(ordem: string): Promise<void>{
        const valores = await this.addValorRepository.findAll();
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