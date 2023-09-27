import { AutorService } from "./autor.service";
import { AutorEntity } from "./autor.entity";
export declare class AutorController {
    private readonly autorService;
    constructor(autorService: AutorService);
    findOneById(params: any): Promise<AutorEntity>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    create(bodyParams: any): Promise<import("typeorm").DeepPartial<AutorEntity> & AutorEntity>;
    update(params: any, bodyParams: any): Promise<import("typeorm").DeepPartial<AutorEntity> & AutorEntity>;
    find(queryParams: any): Promise<AutorEntity[]>;
}
