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
exports.LibroEntity = void 0;
const typeorm_1 = require("typeorm");
const autor_entity_1 = require("../autor/autor.entity");
let LibroEntity = exports.LibroEntity = class LibroEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'title',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], LibroEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'chapters',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], LibroEntity.prototype, "chapters", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'pages',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], LibroEntity.prototype, "pages", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => autor_entity_1.AutorEntity, (autor) => autor.books),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], LibroEntity.prototype, "authors", void 0);
exports.LibroEntity = LibroEntity = __decorate([
    (0, typeorm_1.Entity)('book')
], LibroEntity);
//# sourceMappingURL=libro.entity.js.map