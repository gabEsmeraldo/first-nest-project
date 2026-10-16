import { IsNotEmpty } from "class-validator";

export class PostValidateCpfDTO{
    @IsNotEmpty()
    cpf: string
}