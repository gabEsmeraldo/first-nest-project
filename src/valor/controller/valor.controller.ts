import { Body, Controller, Post } from '@nestjs/common';
import { AddValorInputDTO } from '../services/addValor/dto/addValor.dto.js';
import { AddValorService } from '../services/addValor/service/addValor.service.js';

@Controller('valor')
export class ValorController {
    constructor(private readonly addValorService: AddValorService) {}

    @Post()
    async addValor(@Body() data: AddValorInputDTO){
        return await this.addValorService.execute(data);
    }
}
