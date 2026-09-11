import { Injectable } from "@nestjs/common";
import { GetMensagemMockService } from "../../getMensagemMock/service/getMensagemMock.service.js";
import { DecryptMensagemService } from "../../decryptMensagem/service/decryptMensagem.service.js";

@Injectable()
export class CheckMensagemMockService {
	constructor(
		private readonly getMensagemMockService: GetMensagemMockService,
		private readonly decryptMensagemService: DecryptMensagemService,
	) {}
	
	async checkMensagemMock(decryptMensagem: string): Promise<Boolean> {
		const mensagemMock = await this.getMensagemMockService.getMensagemMock()
		const mensagemDecryptada = await this.decryptMensagemService.decryptMensagem(decryptMensagem)

		return mensagemDecryptada == mensagemMock
	}
}
