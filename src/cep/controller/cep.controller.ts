import { Controller, Get, Query } from '@nestjs/common';
import { CheckCepValidDTO } from '../services/checkCepValid/dto/checkCepValid.dto.js';
import { CheckCepValidService } from '../services/checkCepValid/service/checkCepValid.service.js';
import { CheckCepValidOutputDTO } from '../services/checkCepValid/dto/checkCepValidOutput.dto.js';

@Controller('cep')
export class CepController {
    constructor(private readonly checkValidCepService: CheckCepValidService){}
    @Get()
    async checkCepValid(@Query() data: CheckCepValidDTO): Promise<CheckCepValidOutputDTO>{
        return await this.checkValidCepService.execute(data)
    }
}
