import {IsIn, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class AutorUpdateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}