import express, { Response } from 'express';
import { CreateBookRequest } from '../controllers/requests/books/create-book';
import { Request } from '../controllers/requests/request';
import { BookResponse } from '../controllers/responses/books/book-response';
import * as controller from '../controllers/books';

const router = express.Router();

router.get('/', async (_, res: Response<BookResponse[]>) => {
    const response = await controller.getAll();
    res.status(200).json(response);
});

router.get('/author/:id', async (req: Request<void>, res: Response<BookResponse[]>) => {
    if (!req.params.id) {
        res.status(400).json();
    }
    
    const response = await controller.getByAuthor(req.params.id!);
    res.status(200).json(response);
});

router.post('/', async (req: Request<CreateBookRequest>, res: Response<BookResponse>) => {
    const response = await controller.create(req.body);
    res.status(200).json(response);
});

export default router;