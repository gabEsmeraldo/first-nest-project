import { Controller, Post, Query } from "@nestjs/common";
import { GetAuthTokenService } from "../services/getAuthToken/service/getAuthToken.service.js";
import { GetAuthTokenOutputDTO } from "../services/getAuthToken/dto/getAuthTokenOutput.dto.js";

@Controller('auth')
export class AuthController{
    constructor(private readonly getAuthTokenService: GetAuthTokenService){}

    @Post('token')
    async getAuthToken(@Query('senha') senha: string): Promise<GetAuthTokenOutputDTO> {
        return await this.getAuthTokenService.execute(senha);
    }
}