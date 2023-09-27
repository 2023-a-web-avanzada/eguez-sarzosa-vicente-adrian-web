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
exports.LibroController = void 0;
const common_1 = require("@nestjs/common");
const libro_service_1 = require("./libro.service");
const libro_create_dto_1 = require("./dto/libro-create.dto");
const class_validator_1 = require("class-validator");
const libro_update_dto_1 = require("./dto/libro-update.dto");
let LibroController = exports.LibroController = class LibroController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    findOneById(params) {
        return this.bookService.findOneById(+params.id);
    }
    delete(params) {
        return this.bookService.delete(+params.id);
    }
    async create(bodyParams) {
        const nuevoRegistro = new libro_create_dto_1.LibroCreateDto();
        nuevoRegistro.title = bodyParams.title;
        nuevoRegistro.chapters = bodyParams.chapters;
        nuevoRegistro.pages = bodyParams.pages;
        nuevoRegistro.names = bodyParams.names;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.bookService.create(nuevoRegistro);
    }
    async update(params, bodyParams) {
        const nuevoRegistro = new libro_update_dto_1.LibroUpdateDto();
        nuevoRegistro.title = bodyParams.title;
        nuevoRegistro.chapters = bodyParams.chapters;
        nuevoRegistro.pages = bodyParams.pages;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.bookService.update(bodyParams, +params.id);
    }
    find(queryParams) {
        const qb = this.bookService.libroRepository
            .createQueryBuilder('book');
        qb.leftJoinAndSelect("book.authors", "authors");
        return qb.getMany();
    }
    async obtenerPromedioDePaginasPorCapitulo(params) {
        const book = await this.bookService.findOneById(+params.id);
        const numeroDecimales = 2;
        return {
            id: book.id,
            promedio: (book.pages / book.chapters).toFixed(numeroDecimales)
        };
    }
};
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "find", null);
__decorate([
    (0, common_1.Get)("promedio/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "obtenerPromedioDePaginasPorCapitulo", null);
exports.LibroController = LibroController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
//# sourceMappingURL=libro.controller.js.map