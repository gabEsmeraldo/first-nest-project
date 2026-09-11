import { Injectable } from "@nestjs/common";

@Injectable()
export class GetMensagemMockService {
	constructor() {}

	async getMensagemMock(): Promise<string>{
		return "Teste";
	}
}
