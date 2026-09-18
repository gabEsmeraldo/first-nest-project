import { Module } from '@nestjs/common';
import { GetAuthTokenService } from './getAuthToken/service/getAuthToken.service.js';
import { AuthController } from '../controller/auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from '../../shared/shared.module.js';
import { DecryptService } from '../../shared/decrypt/decrypt.service.js';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0"
        }),
    ],
    controllers: [AuthController],
    providers: [
        GetAuthTokenService,
        DecryptService,
    ],
})
export class AuthServicesModule {}
