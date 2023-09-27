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
exports.AutorController = void 0;
const common_1 = require("@nestjs/common");
const autor_service_1 = require("./autor.service");
const autor_create_dto_1 = require("./dto/autor-create.dto");
const class_validator_1 = require("class-validator");
const autor_update_dto_1 = require("./dto/autor-update.dto");
let AutorController = exports.AutorController = class AutorController {
    constructor(autorService) {
        this.autorService = autorService;
    }
    findOneById(params) {
        return this.autorService.findOneById(+params.id);
    }
    delete(params) {
        return this.autorService.delete(+params.id);
    }
    async create(bodyParams) {
        const nuevoRegistro = new autor_create_dto_1.AutorCreateDto();
        nuevoRegistro.name = bodyParams.name;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.autorService.create(nuevoRegistro);
    }
    async update(params, bodyParams) {
        const nuevoRegistro = new autor_update_dto_1.AutorUpdateDto();
        nuevoRegistro.name = bodyParams.name;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.autorService.update(bodyParams, +params.id);
    }
    find(queryParams) {
        const consulta = {
            relations: ['books'],
            where: {},
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [];
        if (consultaWhere.length > 0) {
            consulta.where = consultaWhere;
        }
        return this.autorService.find(consulta);
    }
};
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "find", null);
exports.AutorController = AutorController = __decorate([
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
//# sourceMappingURL=autor.controller.js.map