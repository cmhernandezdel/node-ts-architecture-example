import express, { Response } from 'express';
import * as bookService from '../services/books';
import { CreateBookRequest } from '../controllers/requests/books/create-book';
import { Request } from '../controllers/requests/request';
import { BookResponse } from '../controllers/responses/books/book-response';

const router = express.Router();

router.get('/', async (_, res: Response<BookResponse[]>) => {
    const books = await bookService.getAll();
    const response = books.map(b => new BookResponse(b));
    res.json(response);
});

router.post('/', async (req: Request<CreateBookRequest>, res: Response<BookResponse>) => {
    const book = await bookService.insert(req.body);
    const response = new BookResponse(book);
    res.json(response);
});

export default router;