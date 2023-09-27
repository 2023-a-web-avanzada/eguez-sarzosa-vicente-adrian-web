import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LibroCreateDto} from "./dto/libro-create.dto";
import {validate} from "class-validator";
import {LibroUpdateDto} from "./dto/libro-update.dto";
import {FindManyOptions, FindOptionsWhere, Like, ObjectLiteral} from "typeorm";
import {LibroEntity} from "./libro.entity";

@Controller('book')
export class LibroController {
    constructor(
        private readonly bookService: LibroService
    ) {}
    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Param() params
    ) {
        return this.bookService.findOneById(+params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params
    ) {
        return this.bookService.delete(+params.id);
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ) {
        const nuevoRegistro = new LibroCreateDto();
        nuevoRegistro.title = bodyParams.title;
        nuevoRegistro.chapters = bodyParams.chapters;
        nuevoRegistro.pages = bodyParams.pages;
        nuevoRegistro.names = bodyParams.names;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.bookService.create(nuevoRegistro)
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new LibroUpdateDto();
        nuevoRegistro.title = bodyParams.title;
        nuevoRegistro.chapters = bodyParams.chapters;
        nuevoRegistro.pages = bodyParams.pages;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.bookService.update(
            bodyParams,
            +params.id
        );
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {

        const qb = this.bookService.libroRepository // QUERY BUILDER https://typeorm.io/#/select-query-builder
            .createQueryBuilder('book');
        qb.leftJoinAndSelect("book.authors", "authors")
        return qb.getMany();
    }



    @Get("promedio/:id")
    @HttpCode(200)
    async obtenerPromedioDePaginasPorCapitulo(
        @Param() params,
    ) {
        const book = await this.bookService.findOneById(+params.id);
        const numeroDecimales = 2;
        return {
            id: book.id,
            promedio: (book.pages/book.chapters).toFixed(numeroDecimales)
        }
    }






















}
