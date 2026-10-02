import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CheckCepValidDTO } from "../dto/checkCepValid.dto.js";
import { CheckCepValidOutputDTO } from "../dto/checkCepValidOutput.dto.js";
import type { AxiosInstance } from 'axios';

@Injectable()
export class CheckCepValidService {
    constructor(
        @Inject('VIACEP')
        private readonly viaCep: AxiosInstance,
    ) {}
    async execute(data: CheckCepValidDTO): Promise<CheckCepValidOutputDTO>{
        try{
            const result = (await this.viaCep.get(`${data.cep.trim().replace(/\D/g,'')}/json/`)).data as CheckCepValidOutputDTO
            if (result.erro === 'true'){throw new NotFoundException('Cep inserido não existe')}
            return result
        }catch (error){
            if ( error instanceof NotFoundException ) throw error
            throw new InternalServerErrorException;
        }
    }
}