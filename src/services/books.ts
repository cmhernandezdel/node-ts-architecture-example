import { Book } from "../models/book";
import { BookRepository } from "../repositories/book-repository";
import { BookDto } from "../repositories/dto/book";
import { CreateBookRequest } from "../controllers/requests/books/create-book";
import { Author } from "../models/author";

const bookRepository = new BookRepository();

export async function getAll(): Promise<Book[]> {
    const dtos: BookDto[] = await bookRepository.findAll();
    return dtos.map(d => d.toEntity());
}

export async function getByAuthor(author: Author) : Promise<Book[]> {
    const dtos = await bookRepository.findByAuthor(author.id);
    return dtos.map(d => d.toEntity());
}

export async function insert(request: CreateBookRequest): Promise<Book> {
    const entity: Book = new Book(request.name, request.publishDate, request.authorId);
    const dto: BookDto = new BookDto({id: entity.id, authorId: entity.authorId, name: entity.name, publishDate: entity.publishDate});
    await bookRepository.insert(dto);
    return entity;
}