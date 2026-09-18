import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const jwt = new JwtService();
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request)
        if (!token){
            throw new UnauthorizedException();
        }
        try{
            await jwt.verifyAsync(token, {
                secret: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0",
            });
            return true;
        }catch {
            throw new UnauthorizedException();
        }
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}