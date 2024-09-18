import { DataTypes, Model } from "sequelize";
import { Book } from "../../models/book";

export class BookDto extends Model {
    declare id: string;
    declare name: string;
    declare publishDate: Date;
    declare authorId: string;

    toEntity(): Book {
        return ({ id: this.id, name: this.name, publishDate: this.publishDate, authorId: this.authorId });
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
    }
};

export const TableName = "Books";