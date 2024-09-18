import { Entity } from './entity';

export class Book extends Entity {
    name: string;
    publishDate: Date;
    authorId: string;

    constructor(name: string, publishDate: Date, authorId: string) {
        super();
        this.name = name;
        this.publishDate = publishDate;
        this.authorId = authorId;
    }
}