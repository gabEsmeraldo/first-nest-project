import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class PostValidateCpfService {
    constructor(){}
    async execute(cpf: string): Promise<Boolean> {
        try {
            cpf = cpf.replaceAll(".", "")
            cpf = cpf.replaceAll("-", "")
            if(cpf.length != 11 || Number(cpf) % 11111111111 == 0){
                throw new BadRequestException
            }


            // verificador primeiro digito
            let primeiro_verificador = Number(cpf.charAt(9))
            let sum: number = 0;
            let mult: number = 10;
            for(let i = 0; i < 9; i++){
                sum += Number(cpf.charAt(i)) * mult
                mult--
            }
            let resto = sum % 11
            if(resto < 2 && primeiro_verificador != 0 || (resto > 2 && ((11 - resto) != primeiro_verificador))){
                console.log("error no V1");
                return false;
            }


            // verificador segundo digito
            let segundo_verificador = Number(cpf.charAt(10))
            sum = 0;
            mult = 11;
            for(let i = 0; i < 10; i++){
                sum += Number(cpf.charAt(i)) * mult
                mult--
            }
            resto = sum % 11
            if(resto < 2 && segundo_verificador != 0 || (resto > 2 && (11 - resto) != segundo_verificador)){
                console.log('error no V2')
                return false;
            }
            return true;
        } catch (error) {
            if (error instanceof BadRequestException) {throw error}
            throw new InternalServerErrorException(error)
        }
    }
}