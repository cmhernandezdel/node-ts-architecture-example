import express, { Response } from 'express';
import { CreateBookRequest } from './requests/books/create-book';
import { Request } from './requests/request';
import { BookResponse } from './responses/books/book-response';
import * as controller from '../controllers/books';
import { validateBody } from '../middlewares/validation';
import { CreateBookValidationSchema } from './validators/books/create-book';

const router = express.Router();

router.get('/', async (_, res: Response<BookResponse[]>) => {
    const response = await controller.getAll();
    res.status(200).json(response);
});

router.get('/author/:id',
    async (req: Request<void>, res: Response<BookResponse[]>) => {
    const response = await controller.getByAuthor(req.params.id!);
    res.status(200).json(response);
});

router.post('/',
    validateBody(CreateBookValidationSchema),
    async (req: Request<CreateBookRequest>, res: Response<BookResponse>) => {
    const response = await controller.create(req.body);
    res.status(200).json(response);
});

export default router;