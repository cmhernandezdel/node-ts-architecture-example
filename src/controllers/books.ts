import { BookResponse } from "./responses/books/book-response";
import * as booksService from "../services/books";
import * as authorsService from "../services/authors";
import { CreateBookRequest } from "./requests/books/create-book";
import {} from 'uuid';

export async function getAll(): Promise<BookResponse[]> {
    const books = await booksService.getAll();
    const response = books.map(b => new BookResponse(b));
    return response;
}

export async function getByAuthor(id: string): Promise<BookResponse[]> {
    const author = await authorsService.getById(id);
    
    if (!author) {
        return [];
    }

    const books = await booksService.getByAuthor(author);
    const response = books.map(b => new BookResponse(b));
    return response;
}

export async function create(request: CreateBookRequest) : Promise<BookResponse> {
    const book = await booksService.insert(request);
    const response = new BookResponse(book);
    return response;
}