import { BookDto } from "./dto/book";
import { Repository } from "./repository";

export class BookRepository implements Repository<BookDto> {
    findAll(): Promise<BookDto[]> {
        return BookDto.findAll();
    }

    find(id: string): Promise<BookDto | null> {
        return BookDto.findOne({
            where: { id: id }
        });
    }

    findByAuthor(authorId: string): Promise<BookDto[]> {
        return BookDto.findAll({
            where: { authorId: authorId }
        });
    }

    insert(item: BookDto): Promise<BookDto> {
        return item.save();
    }

    update(item: BookDto): Promise<BookDto> {
        return item.save();
    }

    delete(item: BookDto): Promise<void> {
        return item.destroy();
    }
}