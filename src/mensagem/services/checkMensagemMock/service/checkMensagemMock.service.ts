import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CheckMensagemMockOutputDTO } from "../dto/checkMensagemMockOutput.dto.js";
import { CheckMensagemMockInputDTO } from "../dto/checkMensagemMock.dto.js";

@Injectable()
export class CheckMensagemMockService {
	constructor() {}
	
	async execute(data: CheckMensagemMockInputDTO): Promise<CheckMensagemMockOutputDTO> {
		
		try{
			return { checked: await this.decryptMensagem(data.mensagem) === this.getMensagemMock() }
		} catch (error) {
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
            decryptada += default_list[secret_key.indexOf(mensagem_encryptada.slice(index, index+1))];
        }
        return decryptada;
    }

	getMensagemMock(): string{
		return "ola gabriel";
	}
}
