import { Entity } from "./entity";

export class Author extends Entity {
    name: string;
    birthDate?: Date;
    country?: string;

    constructor(name: string, birthDate?: Date, country?: string) {
        super();
        this.name = name;
        this.birthDate = birthDate;
        this.country = country;
    }
}