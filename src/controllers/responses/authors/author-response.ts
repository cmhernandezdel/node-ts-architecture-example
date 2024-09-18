import { Author } from "../../../models/author";

export class AuthorResponse {
    id: string;
    name: string;
    birthDate?: Date;
    country?: string;

    constructor(entity: Author) {
        this.id = entity.id;
        this.name = entity.name;
        this.birthDate = entity.birthDate;
        this.country = entity.country;
    }
}