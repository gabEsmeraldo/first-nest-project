import { Controller, Post, Query } from "@nestjs/common";
import { AddJobDTO } from "../services/postFila/dto/addJob.dto.js";
import { AddJobService } from "../services/postFila/service/addJob.service.js";

@Controller('fila')
export class FilaController{
    constructor(private readonly addJobService: AddJobService){}

    @Post('addJob')
    async addJob(@Query() data: AddJobDTO){
        return await this.addJobService.execute(data);
    }
}