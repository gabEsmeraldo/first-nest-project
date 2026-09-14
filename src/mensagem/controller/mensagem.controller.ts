import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { CheckMensagemMockService } from '../services/checkMensagemMock/service/checkMensagemMock.service.js';
import { CheckMensagemMockInputDTO } from '../services/checkMensagemMock/dto/checkMensagemMock.dto.js';
import { CheckMensagemMockOutputDTO } from '../services/checkMensagemMock/dto/checkMensagemMockOutput.dto.js';

@Controller('mensagem')
export class MensagemController {
 	constructor(
		private readonly checkMensagemMockService: CheckMensagemMockService,
	) {}

	@Get('check/:mensagem')
	async getCheckMensagem(@Param('mensagem') data: string): Promise<CheckMensagemMockOutputDTO> {
		const result = await this.checkMensagemMockService.execute(data)
		return result;
	}
}
