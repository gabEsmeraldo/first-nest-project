import { Injectable, UnauthorizedException } from "@nestjs/common";
import { GetAuthTokenOutputDTO } from "../dto/getAuthTokenOutput.dto.js";
import { JwtService } from "@nestjs/jwt";
import { DecryptService } from "../../../../shared/decrypt/decrypt.service.js";

@Injectable()
export class GetAuthTokenService{
    constructor(
        private jwtService: JwtService,
        private readonly decryptService: DecryptService,
    ) {}
    async execute(data: string): Promise<GetAuthTokenOutputDTO> {
        try{
            if(await this.decryptService.decrypt(data) === 'senhamassademais'){
                return await this.jwtService.signAsync({},{
                    secret: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0",
                    expiresIn: '1d',
                }) as GetAuthTokenOutputDTO
            }
        }catch{
            throw new UnauthorizedException();
        }
    }
}