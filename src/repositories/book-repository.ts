import { BookModel } from "./models/book";
import { Repository } from "./repository";

export class BookRepository implements Repository<BookModel> {
    findAll(): Promise<BookModel[]> {
        return BookModel.findAll();
    }

    find(id: string): Promise<BookModel | null> {
        return BookModel.findOne({
            where: { id: id }
        });
    }

    findByAuthor(authorId: string): Promise<BookModel[]> {
        return BookModel.findAll({
            where: { authorId: authorId }
        });
    }

    insert(item: BookModel): Promise<BookModel> {
        return item.save();
    }

    update(item: BookModel): Promise<BookModel> {
        return item.save();
    }

    delete(item: BookModel): Promise<void> {
        return item.destroy();
    }
}