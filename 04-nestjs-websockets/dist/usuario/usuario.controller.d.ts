import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findOneById(params: any): Promise<UsuarioEntity>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    create(bodyParams: any): Promise<import("typeorm").DeepPartial<UsuarioEntity> & UsuarioEntity>;
    update(params: any, bodyParams: any): Promise<import("typeorm").DeepPartial<UsuarioEntity> & UsuarioEntity>;
    find(queryParams: any): Promise<UsuarioEntity[]>;
}
