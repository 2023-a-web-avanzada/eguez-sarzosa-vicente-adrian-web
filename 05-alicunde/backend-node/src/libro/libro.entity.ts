import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AutorEntity} from "../autor/autor.entity";

@Entity('book') // nombre tabla en la bdd
export class LibroEntity {
    // id autogenerado
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'title',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    title: string;

    @Column({
        name: 'chapters',
        type: 'int',
        nullable: false,
    })
    chapters: number;

    @Column({
        name: 'pages',
        type: 'int',
        nullable: false,
    })
    pages: number;

    @ManyToMany(() => AutorEntity, (autor) => autor.books)
    @JoinTable()
    authors: AutorEntity[]

}