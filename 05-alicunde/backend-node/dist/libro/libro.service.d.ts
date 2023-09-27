import { DataSource, DeepPartial, FindManyOptions } from "typeorm";
import { LibroEntity } from "./libro.entity";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";
import { LibroUpdateDto } from "./dto/libro-update.dto";
import { LibroCreateDto } from "./dto/libro-create.dto";
export declare class LibroService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    libroRepository: import("typeorm").Repository<LibroEntity>;
    find(opciones: FindManyOptions<LibroEntity>): Promise<LibroEntity[]>;
    findOneById(id: number): Promise<LibroEntity>;
    create(datosCrear: LibroCreateDto): Promise<(DeepPartial<LibroEntity> & LibroEntity)>;
    update(datosActualizar: LibroUpdateDto, id: number): Promise<(DeepPartial<LibroEntity> & LibroEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
