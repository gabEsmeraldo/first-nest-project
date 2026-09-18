import { IsString, MinLength } from "class-validator";

export class CheckCepValidDTO {
    @IsString()
    @MinLength(8)
    cep: string
}