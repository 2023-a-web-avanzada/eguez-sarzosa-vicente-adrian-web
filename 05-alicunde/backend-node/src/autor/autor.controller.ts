import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorCreateDto} from "./dto/autor-create.dto";
import {validate} from "class-validator";
import {AutorUpdateDto} from "./dto/autor-update.dto";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {AutorEntity} from "./autor.entity";

@Controller('author')
export class AutorController {
    constructor(
        private readonly autorService: AutorService
    ) {}
    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Param() params
    ) {
        return this.autorService.findOneById(+params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params
    ) {
        return this.autorService.delete(+params.id);
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ) {
        const nuevoRegistro = new AutorCreateDto();
        nuevoRegistro.name = bodyParams.name;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.autorService.create(nuevoRegistro);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new AutorUpdateDto();
        nuevoRegistro.name = bodyParams.name;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.autorService.update(
            bodyParams,
            +params.id
        );
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<AutorEntity> = {
            relations: ['books'],
            where: {},
            skip: queryParams.skip ? +queryParams.skip : 0 ,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<AutorEntity>[]
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.autorService.find(consulta);
    }






















}
