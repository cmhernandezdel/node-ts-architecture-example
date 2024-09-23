import { Genre } from '../shared/enums/genre';
import { Entity } from './entity';

export class Book extends Entity {
    name: string;
    publishDate: Date;
    authorId: string;
    genre: Genre;

    constructor(name: string, publishDate: Date, authorId: string, genre: Genre) {
        super();
        this.name = name;
        this.publishDate = publishDate;
        this.authorId = authorId;
        this.genre = genre;
    }
}