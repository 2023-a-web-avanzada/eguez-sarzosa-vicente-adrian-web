import {IsArray, IsInt, IsNotEmpty, IsString} from "class-validator";

export class LibroCreateDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsInt()
    chapters: number;

    @IsNotEmpty()
    @IsInt()
    pages: number;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    names: string[];
}