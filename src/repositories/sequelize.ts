import { Sequelize } from "sequelize";
import { AuthorModel, Schema as AuthorSchema, TableName as AuthorTableName } from "./models/author";
import { BookModel, Schema as BookSchema, TableName as BookTableName } from "./models/book";
import config from "../config";

const sequelize = new Sequelize(config.database.connection);

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
    AuthorModel.init(AuthorSchema, { sequelize: sequelize, tableName: AuthorTableName });
    BookModel.init(BookSchema, { sequelize: sequelize, tableName: BookTableName });
}

function createRelationships(): void {
    AuthorModel.hasMany(BookModel, { as: "books", foreignKey: "authorId" });
    BookModel.belongsTo(AuthorModel, { as: "author", foreignKey: "authorId" });
}

export { ensureDatabaseCreated };