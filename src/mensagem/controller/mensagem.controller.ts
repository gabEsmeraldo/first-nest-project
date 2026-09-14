import { Controller, Get, Param } from '@nestjs/common';
import { CheckMensagemMockService } from '../services/checkMensagemMock/service/checkMensagemMock.service.js';
import { CheckMensagemMockOutputDTO } from '../services/checkMensagemMock/dto/checkMensagemMockOutput.dto.js';
import { CheckMensagemMockInputDTO } from '../services/checkMensagemMock/dto/checkMensagemMock.dto.js';

@Controller('mensagem')
export class MensagemController {
 	constructor(private readonly checkMensagemMockService: CheckMensagemMockService,) {}

	@Get('check/:mensagem')
	async getCheckMensagem(@Param() data: CheckMensagemMockInputDTO): Promise<CheckMensagemMockOutputDTO> {
		return await this.checkMensagemMockService.execute(data);
	}
}
