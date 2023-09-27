import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class AutorCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}