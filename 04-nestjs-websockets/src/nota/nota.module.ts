import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaEntity} from "./nota.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [NotaEntity], // Entidad en este modulo
            'default' // nombre de la cadena de conexion
        ),
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class NotaModule {}