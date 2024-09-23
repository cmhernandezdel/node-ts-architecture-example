import { DataTypes, Model } from "sequelize";
import { Book } from "../../entities/book";
import { Genre } from "../../shared/enums/genre";

export class BookDto extends Model {
    declare readonly id: string;
    declare readonly name: string;
    declare readonly publishDate: Date;
    declare readonly authorId: string;
    declare readonly genre: Genre;

    toEntity(): Book {
        return ({ id: this.id, name: this.name, publishDate: this.publishDate, authorId: this.authorId, genre: this.genre });
    }
}

export const Schema = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    genre: {
        type: DataTypes.ENUM(...Object.values(Genre)),
        allowNull: false
    }
};

export const TableName = "Books";