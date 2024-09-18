import express, { Application } from "express";
import authorsRoutes from "./routes/authors";
import booksRoutes from "./routes/books";
import { ensureDatabaseCreated } from "./repositories/sequelize";

const app: Application = express();

// middlewares
app.use(express.json());

// routes
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);

app.listen(3000, async () => {
    await ensureDatabaseCreated();
    console.log("app is listening on port 3000");
});
