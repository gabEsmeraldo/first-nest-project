import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UpdateDataDTO } from "../dto/updateData.dto.js";
import { UpdateDataRepository } from "../repository/updateData.repository.js";

@Injectable()
export class UpdateDataService {
    constructor(private readonly updateDataRepository: UpdateDataRepository) {}
    async execute(data: UpdateDataDTO): Promise<void> {
        try{
            if (typeof data.data != "string" && typeof data.data != "number" && typeof data.data != "boolean") { throw new BadRequestException('os dados foram inseridos incorretamente') }
            return await this.updateDataRepository.updateData<typeof data.data>(data.data);
        }catch (error) {
            if (error instanceof BadRequestException) throw error;
            throw new InternalServerErrorException(error);
        }
    }
}