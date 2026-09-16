import { IsIn, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class AddValorInputDTO{
    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @IsIn(["crescente", "decrescente"])
    ordem: string;
}