import { Sequelize } from "sequelize";
import { AuthorDto, Schema as AuthorSchema, TableName as AuthorTableName } from "./dto/author";
import { BookDto, Schema as BookSchema, TableName as BookTableName } from "./dto/book";

const sequelize = new Sequelize("postgres://admin:admin@postgres:5432/book-database");

async function ensureDatabaseCreated(): Promise<void> {
    try {
        await sequelize.authenticate();
        initializeModels();
        createRelationships();
        await sequelize.sync();
    } catch (err) {
        console.error(err);
    }
}

function initializeModels(): void {
    AuthorDto.init(AuthorSchema, { sequelize: sequelize, tableName: AuthorTableName });
    BookDto.init(BookSchema, { sequelize: sequelize, tableName: BookTableName });
}

function createRelationships(): void {
    AuthorDto.hasMany(BookDto, { as: "books", foreignKey: "authorId" });
    BookDto.belongsTo(AuthorDto, { as: "author", foreignKey: "authorId" });
}

export { ensureDatabaseCreated };