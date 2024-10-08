import { DataTypes, Model } from "sequelize";
import { Author } from "../../entities/author";

export class AuthorModel extends Model {
    declare readonly id: string;
    declare readonly name: string;
    declare readonly birthDate?: Date;
    declare readonly country?: string;

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