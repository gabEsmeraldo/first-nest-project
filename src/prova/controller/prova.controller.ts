import { Body, Controller, Put } from "@nestjs/common";
import { UpdateDataDTO } from "../services/updateData/dto/updateData.dto.js";
import { UpdateDataService } from "../services/updateData/service/updateData.service.js";

@Controller('prova')
export class ProvaController{
    constructor(private readonly updateDataService: UpdateDataService){}

    @Put('updateData')
    async updateData(@Body() data: UpdateDataDTO): Promise<void> {
        return await this.updateDataService.execute(data);
    }
}