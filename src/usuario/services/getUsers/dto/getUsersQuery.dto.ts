import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class GetUsersQueryDTO {
    @IsInt()
    @Min(1)
    @Type(() => Number)
    page: number;

    @IsInt()
    @Min(1)
    @Max(100)
    @Type(() => Number)
    page_size: number;
}