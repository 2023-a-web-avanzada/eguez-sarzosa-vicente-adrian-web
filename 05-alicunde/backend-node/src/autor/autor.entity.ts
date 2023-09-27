import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {LibroEntity} from "../libro/libro.entity";

@Entity('author') // nombre tabla en la bdd
export class AutorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    name: string;


    @ManyToMany(() => LibroEntity, (libro) => libro.authors)
    books: LibroEntity[]
}