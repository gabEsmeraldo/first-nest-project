import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsString, MinLength } from "class-validator";

export class GetExcelDTO {
    @IsString()
    @MinLength(3)
    nome: string;

    @IsInt()
    @Type(() => Number)
    idade: number;
    
    @IsBoolean()
    desempregado: boolean;

    @IsDate()
    data: any;
}