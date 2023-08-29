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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const nota_entity_1 = require("../nota/nota.entity");
let UsuarioEntity = exports.UsuarioEntity = class UsuarioEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_nombres',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_apellidos',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_rol',
        type: 'varchar',
        length: 1,
        nullable: false,
        default: 'U',
        comment: 'U = usuario; A = administrador;'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nota_entity_1.NotaEntity, (notaInstancia) => notaInstancia.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "notas", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('epn_usuario')
], UsuarioEntity);
//# sourceMappingURL=usuario.entity.js.map