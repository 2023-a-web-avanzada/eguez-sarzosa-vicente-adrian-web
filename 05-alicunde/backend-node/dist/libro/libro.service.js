"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const libro_entity_1 = require("./libro.entity");
const autor_entity_1 = require("../autor/autor.entity");
let LibroService = exports.LibroService = class LibroService {
    constructor(datasource) {
        this.datasource = datasource;
        this.libroRepository = this.datasource.getRepository(libro_entity_1.LibroEntity);
    }
    find(opciones) {
        return this.libroRepository.find(opciones);
    }
    findOneById(id) {
        return this.libroRepository.findOne({
            where: {
                id: id
            },
        });
    }
    async create(datosCrear) {
        const autorRepository = this.datasource.getRepository(autor_entity_1.AutorEntity);
        const book = this.libroRepository.create(datosCrear);
        const authors = [];
        for (let authorName of datosCrear.names) {
            const author = autorRepository.create({ name: authorName });
            await autorRepository.save(author);
            authors.push(author);
        }
        book.authors = authors;
        const newBook = await this.libroRepository.save(book);
        return {
            ...newBook,
            authors
        };
    }
    update(datosActualizar, id) {
        return this.libroRepository.save({ ...datosActualizar, id });
    }
    delete(id) {
        return this.libroRepository.delete(id);
    }
};
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], LibroService);
//# sourceMappingURL=libro.service.js.map