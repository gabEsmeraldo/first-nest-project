import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CheckMensagemMockInputDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    mensagem: string;
}