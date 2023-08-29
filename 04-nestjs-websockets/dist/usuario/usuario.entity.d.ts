import { NotaEntity } from "../nota/nota.entity";
export declare class UsuarioEntity {
    id: number;
    nombres: string;
    apellidos: string;
    rol: string;
    notas: NotaEntity[];
}
