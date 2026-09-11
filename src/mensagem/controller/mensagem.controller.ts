import { Controller, Get, Query } from '@nestjs/common';
import { CheckMensagemMockService } from '../services/checkMensagemMock/service/checkMensagemMock.service.js';

@Controller('mensagem')
export class MensagemController {
 	constructor(
		private readonly checkMensagemMockService: CheckMensagemMockService,
	) {}

	@Get('check')
	async getCheckMensagem(@Query('mensagem') mensagem: string): Promise<Boolean> {
		return await this.checkMensagemMockService.checkMensagemMock(mensagem)
	}
}
