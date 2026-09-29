import { IsNotEmpty } from "class-validator";

export class AddJobDTO{
    @IsNotEmpty()
    mensagem: string
}