import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AddValorInputDTO } from '../services/addValor/dto/addValor.dto.js';
import { AddValorService } from '../services/addValor/service/addValor.service.js';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard.js';

@Controller('valor')
export class ValorController {
    constructor(private readonly addValorService: AddValorService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async addValor(@Body() data: AddValorInputDTO){
        return await this.addValorService.execute(data);
    }
}
