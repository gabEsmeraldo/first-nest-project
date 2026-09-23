import { IsIn } from "class-validator";

export class DeleteDataDTO{
    @IsIn(["string", "boolean", "number"])
    type: string;
}