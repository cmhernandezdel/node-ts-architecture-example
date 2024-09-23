import express, { Application } from "express";
import authorsRoutes from "./routes/authors";
import booksRoutes from "./routes/books";

const app: Application = express();

// middlewares
app.use(express.json());

// routes
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);

export default app;