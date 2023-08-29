import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('epn_nota') // nombre tabla en la bdd
export class NotaEntity {
    // id autogenerado
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'nota', // nombre campo bdd
        nullable: false, // Si es nullable
    })
    nota: number; // nombre campo

    @ManyToOne(() => UsuarioEntity, (usuarioInstancia) => usuarioInstancia.notas)
    usuario:UsuarioEntity
}