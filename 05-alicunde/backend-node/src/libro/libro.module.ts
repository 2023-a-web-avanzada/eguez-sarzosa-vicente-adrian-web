import {Module} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LibroEntity} from "./libro.entity";
import {LibroController} from "./libro.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [LibroEntity], // Entidad en este modulo
            'default' // nombre de la cadena de conexion
        ),
    ],
    controllers: [LibroController],
    providers: [LibroService],
    exports: [LibroService]
})
export class LibroModule {}