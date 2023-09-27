import {IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class LibroUpdateDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsInt()
    chapters: number;

    @IsOptional()
    @IsInt()
    pages: number;
}