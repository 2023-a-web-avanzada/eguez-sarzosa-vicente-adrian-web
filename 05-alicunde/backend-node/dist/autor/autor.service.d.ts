import { DataSource, DeepPartial, FindManyOptions } from "typeorm";
import { AutorEntity } from "./autor.entity";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";
import { AutorUpdateDto } from "./dto/autor-update.dto";
import { AutorCreateDto } from "./dto/autor-create.dto";
export declare class AutorService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    usuarioRepository: import("typeorm").Repository<AutorEntity>;
    find(opciones: FindManyOptions<AutorEntity>): Promise<AutorEntity[]>;
    findOneById(id: number): Promise<AutorEntity>;
    create(datosCrear: AutorCreateDto): Promise<(DeepPartial<AutorEntity> & AutorEntity)>;
    update(datosActualizar: AutorUpdateDto, id: number): Promise<(DeepPartial<AutorEntity> & AutorEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
