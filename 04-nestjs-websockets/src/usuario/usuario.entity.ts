import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NotaEntity} from "../nota/nota.entity";

@Entity('epn_usuario') // nombre tabla en la bdd
export class UsuarioEntity{
    // id autogenerado
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'user_nombres', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    nombres: string; // nombre campo

    @Column({
        name: 'user_apellidos', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    apellidos: string; // nombre campo

    @Column({
        name: 'user_rol', // nombre campo bdd
        type: 'varchar', /// tipo campo bdd
        length: 1, // longitud
        nullable: false, // Si es nullable
        default: 'U', // Valor por defecto
        // comentario en la base de datos
        comment: 'U = usuario; A = administrador;'
    })
    rol: string;

    @OneToMany(() => NotaEntity,
        (notaInstancia) => notaInstancia.usuario)
    notas: NotaEntity[]

}