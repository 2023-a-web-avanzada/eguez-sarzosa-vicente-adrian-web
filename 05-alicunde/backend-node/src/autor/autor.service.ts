import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, FindManyOptions} from "typeorm";
import {AutorEntity} from "./autor.entity";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {AutorUpdateDto} from "./dto/autor-update.dto";
import {AutorCreateDto} from "./dto/autor-create.dto";

@Injectable()
export class AutorService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public usuarioRepository = this.datasource.getRepository(
        AutorEntity
    );
    find(
        opciones: FindManyOptions<AutorEntity>
    ): Promise<AutorEntity[]> {
        return this.usuarioRepository.find(opciones)
    }
    findOneById(id: number): Promise<AutorEntity> {
        return this.usuarioRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }



    create(
        datosCrear: AutorCreateDto
    ): Promise<(DeepPartial<AutorEntity> & AutorEntity)> {
        return this.usuarioRepository.save(datosCrear);
    }

    update(
        datosActualizar: AutorUpdateDto,
        id: number
    ): Promise<(DeepPartial<AutorEntity> & AutorEntity)> {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number): Promise<DeleteResult> {
        return this.usuarioRepository.delete(id);
    }


}