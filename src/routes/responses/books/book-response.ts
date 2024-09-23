import { Book } from "../../../entities/book";

export class BookResponse {
    id: string;
    name: string;
    publishDate: Date;
    authorId: string;

    constructor(entity: Book) {
        this.id = entity.id;
        this.name = entity.name;
        this.publishDate = entity.publishDate;
        this.authorId = entity.authorId;
    }
} 