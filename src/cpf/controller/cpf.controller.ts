import { Controller, Post, Query } from '@nestjs/common';
import { PostValidateCpfService } from '../services/postValidateCpf/service/postValidateCpf.service.js';
import { PostValidateCpfDTO } from '../services/postValidateCpf/dto/postValidateCpf.dto.js';

@Controller('cpf')
export class CpfController {
    constructor(private readonly postValidateCpfService: PostValidateCpfService) {}

    @Post('validate')
    async validateCpf(@Query() data: PostValidateCpfDTO): Promise<Boolean>{
        return this.postValidateCpfService.execute(data.cpf); 
    }
}
