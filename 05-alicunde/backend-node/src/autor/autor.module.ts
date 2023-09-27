import {Module} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AutorEntity} from "./autor.entity";
import {AutorController} from "./autor.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [AutorEntity], // Entidad en este modulo
            'default' // nombre de la cadena de conexion
        ),
    ],
    controllers: [AutorController],
    providers: [AutorService],
    exports: [AutorService]
})
export class AutorModule {}