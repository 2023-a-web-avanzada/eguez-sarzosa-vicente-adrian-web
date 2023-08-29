import { DataSource, DeepPartial, FindManyOptions } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";
import { UsuarioUpdateDto } from "./dto/usuario-update.dto";
import { UsuarioCreateDto } from "./dto/usuario-create.dto";
export declare class UsuarioService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    usuarioRepository: import("typeorm").Repository<UsuarioEntity>;
    find(opciones: FindManyOptions<UsuarioEntity>): Promise<UsuarioEntity[]>;
    findOneById(id: number): Promise<UsuarioEntity>;
    create(datosCrear: UsuarioCreateDto): Promise<(DeepPartial<UsuarioEntity> & UsuarioEntity)>;
    update(datosActualizar: UsuarioUpdateDto, id: number): Promise<(DeepPartial<UsuarioEntity> & UsuarioEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
