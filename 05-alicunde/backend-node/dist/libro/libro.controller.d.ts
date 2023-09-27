import { LibroService } from "./libro.service";
import { LibroEntity } from "./libro.entity";
export declare class LibroController {
    private readonly bookService;
    constructor(bookService: LibroService);
    findOneById(params: any): Promise<LibroEntity>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    create(bodyParams: any): Promise<import("typeorm").DeepPartial<LibroEntity> & LibroEntity>;
    update(params: any, bodyParams: any): Promise<import("typeorm").DeepPartial<LibroEntity> & LibroEntity>;
    find(queryParams: any): Promise<LibroEntity[]>;
    obtenerPromedioDePaginasPorCapitulo(params: any): Promise<{
        id: number;
        promedio: string;
    }>;
}
