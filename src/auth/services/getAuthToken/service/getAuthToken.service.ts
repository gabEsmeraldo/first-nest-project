import { Injectable, UnauthorizedException } from "@nestjs/common";
import { GetAuthTokenOutputDTO } from "../dto/getAuthTokenOutput.dto.js";
import { JwtService } from "@nestjs/jwt";
import { DecryptService } from "../../../../shared/decrypt/services/decrypt.service.js";

@Injectable()
export class GetAuthTokenService{
    constructor(
        private jwtService: JwtService,
        private readonly decryptService: DecryptService,
    ) {}
    async execute(data: string): Promise<GetAuthTokenOutputDTO> {
        const auth_return:GetAuthTokenOutputDTO = {}
        try{
            data = await this.decryptService.decrypt(data);
            if(data === 'senhamassademais'){
                auth_return.access_token = await this.jwtService.signAsync({},{
                    secret: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0",
                    expiresIn: '1d',
                })
            }
        }catch{
            throw new UnauthorizedException();
        }
        
        return auth_return;
    }
}