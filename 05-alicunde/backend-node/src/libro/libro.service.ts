import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, FindManyOptions} from "typeorm";
import {LibroEntity} from "./libro.entity";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {LibroUpdateDto} from "./dto/libro-update.dto";
import {LibroCreateDto} from "./dto/libro-create.dto";
import {AutorEntity} from "../autor/autor.entity";

@Injectable()
export class LibroService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public libroRepository = this.datasource.getRepository(
        LibroEntity
    );
    find(
        opciones: FindManyOptions<LibroEntity>
    ): Promise<LibroEntity[]> {
        return this.libroRepository.find(opciones)
    }
    findOneById(id: number): Promise<LibroEntity> {
        return this.libroRepository.findOne({
            where: {
                id: id
            },
        })
    }



    async create(
        datosCrear: LibroCreateDto
    ): Promise<(DeepPartial<LibroEntity> & LibroEntity)> {
        const autorRepository = this.datasource.getRepository(
            AutorEntity
        );
        const book = this.libroRepository.create(datosCrear);
        const authors = [];
        for (let authorName of datosCrear.names){
            const author = autorRepository.create({name:authorName});
            await autorRepository.save(author)
            authors.push(author);
        }
        book.authors = authors
        const newBook = await this.libroRepository.save(book);
        return {
            ...newBook,
            authors
        };
    }

    update(
        datosActualizar: LibroUpdateDto,
        id: number
    ): Promise<(DeepPartial<LibroEntity> & LibroEntity)> {
        return this.libroRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number): Promise<DeleteResult> {
        return this.libroRepository.delete(id);
    }


}