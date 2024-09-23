import { DataTypes, Model } from "sequelize";
import { Author } from "../../entities/author";

export class AuthorDto extends Model {
    declare id: string;
    declare name: string;
    declare birthDate?: Date;
    declare country?: string;

    toEntity(): Author {
        return ({ id: this.id, name: this.name, birthDate: this.birthDate, country: this.country });
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
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    }
};

export const TableName = "Authors";