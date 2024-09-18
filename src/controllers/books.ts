import { BookResponse } from "./responses/books/book-response";
import * as booksService from "../services/books";
import { CreateBookRequest } from "./requests/books/create-book";

export async function getAll(): Promise<BookResponse[]> {
    const authors = await booksService.getAll();
    const response = authors.map(a => new BookResponse(a));
    return response;
}

export async function create(request: CreateBookRequest) : Promise<BookResponse> {
    const author = await booksService.insert(request);
    const response = new BookResponse(author);
    return response;
}