"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const eventos_module_1 = require("./eventos/eventos.module");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./usuario/usuario.entity");
const nota_entity_1 = require("./nota/nota.entity");
const usuario_module_1 = require("./usuario/usuario.module");
const nota_module_1 = require("./nota/nota.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            eventos_module_1.EventosModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: './bdd/bdd.sqlite',
                entities: [
                    usuario_entity_1.UsuarioEntity, nota_entity_1.NotaEntity
                ],
                synchronize: true,
                dropSchema: false,
            }),
            usuario_module_1.UsuarioModule, nota_module_1.NotaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map