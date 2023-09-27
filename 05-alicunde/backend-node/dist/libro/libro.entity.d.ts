import { AutorEntity } from "../autor/autor.entity";
export declare class LibroEntity {
    id: number;
    title: string;
    chapters: number;
    pages: number;
    authors: AutorEntity[];
}
