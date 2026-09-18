import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CheckMensagemMockOutputDTO } from "../dto/checkMensagemMockOutput.dto.js";
import { CheckMensagemMockInputDTO } from "../dto/checkMensagemMock.dto.js";
import { DecryptService } from "../../../../shared/decrypt/services/decrypt.service.js";

@Injectable()
export class CheckMensagemMockService {
	constructor(private readonly decryptService: DecryptService) {}
	
	async execute(data: CheckMensagemMockInputDTO): Promise<CheckMensagemMockOutputDTO> {
		
		try{
			return { checked: await this.decryptService.decrypt(data.mensagem) === this.getMensagemMock() }
		} catch (error) {
			if (error instanceof BadRequestException) throw error
			throw new InternalServerErrorException(error)
		}
	}

	getMensagemMock(): string{
		return "ola gabriel";
	}
}
