import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [UsuarioEntity], // Entidad en este modulo
            'default' // nombre de la cadena de conexion
        ),
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuarioModule {}