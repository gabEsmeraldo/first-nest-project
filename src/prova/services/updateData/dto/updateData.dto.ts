import { IsNotEmpty } from "class-validator";

export class UpdateDataDTO{
    @IsNotEmpty()
    data: string | number | boolean;
}