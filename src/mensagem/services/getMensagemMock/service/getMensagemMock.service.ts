import { Injectable } from "@nestjs/common";

@Injectable()
export class GetMensagemMockService {
	constructor() {}

	getMensagemMock(): string{
		return "Teste";
	}
}
