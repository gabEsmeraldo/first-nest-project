import { Controller, Get, Body, HttpException } from '@nestjs/common';
import { CheckMensagemMockService } from '../services/checkMensagemMock/service/checkMensagemMock.service.js';

@Controller('mensagem')
export class MensagemController {
 	constructor(
		private readonly checkMensagemMockService: CheckMensagemMockService
	) {}

	@Get('check')
	async getCheckMensagem(@Body() mensagemEncryptada: String): Promise<Boolean> {
		return await this.checkMensagemMockService.checkMensagemMock(mensagemEncryptada)
	}

	@Get()
	getDefault(): String{
		return 'healthChecked';
	}

	@Get('health')
	async getCheckHealth(): Promise<String>{
		return 'Healthy';
	}
}
