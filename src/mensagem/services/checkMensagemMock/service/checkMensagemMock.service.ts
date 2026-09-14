import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CheckMensagemMockInputDTO } from "../dto/checkMensagemMock.dto.js";
import { CheckMensagemMockOutputDTO } from "../dto/checkMensagemMockOutput.dto.js";

@Injectable()
export class CheckMensagemMockService {
	constructor() {}
	
	async execute(data: string): Promise<CheckMensagemMockOutputDTO> {
		
		try{
			if(!data) throw new BadRequestException('Error')
			return { checked: await this.decryptMensagem(data) === this.getMensagemMock() }//this.decrypted;
		} catch (error) {
			console.log('catch');
			if (error instanceof BadRequestException) throw error
			throw new InternalServerErrorException(error)
		}
	}

	async decryptMensagem(mensagem_encryptada: string): Promise<string> {
        const default_list: string = "abcdefghijklmnopqrstuvwxyz123456790 "
        const secret_key: string = "nzsdylxc9r3f0wg1i aeb2v7kq46ojphumt5"
        let decryptada: string = "";
        mensagem_encryptada = mensagem_encryptada.toLowerCase();

        for(let index:number = 0; index < mensagem_encryptada.length; index++){
            let char = mensagem_encryptada.slice(index, index+1);
            let value = secret_key.indexOf(char);
            let decrypted_char = default_list[value];
            decryptada += decrypted_char;
        }
        console.log(decryptada);
        return decryptada;
    }

	getMensagemMock(): string{
		return "ola gabriel";
	}
}
