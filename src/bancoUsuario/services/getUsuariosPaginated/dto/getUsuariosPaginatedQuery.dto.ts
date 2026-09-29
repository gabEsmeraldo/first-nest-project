import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class GetUsuariosPaginatedQueryDTO{
    @IsInt()
    @Min(1)
    @Type(() => Number)
    page: number;

    @IsInt()
    @Min(1)
    @Max(100)
    @Type(() => Number)
    size: number;
}