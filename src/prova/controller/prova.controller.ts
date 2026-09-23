import { Body, Controller, Delete, Param, Put } from "@nestjs/common";
import { UpdateDataDTO } from "../services/updateData/dto/updateData.dto.js";
import { UpdateDataService } from "../services/updateData/service/updateData.service.js";
import { DeleteDataService } from "../services/deleteData/service/deleteData.service.js";
import { DeleteDataDTO } from "../services/deleteData/dto/deleteData.dto.js";

@Controller('prova')
export class ProvaController{
    constructor(
        private readonly updateDataService: UpdateDataService,
        private readonly deleteDataService: DeleteDataService,
    ){}

    @Put('updateData')
    async updateData(@Body() data: UpdateDataDTO): Promise<void> {
        return await this.updateDataService.execute(data);
    }

    @Delete('deleteData/:type')
    async deleteData(@Param() data: DeleteDataDTO): Promise<void> {
        return await this.deleteDataService.execute(data.type)
    }
}