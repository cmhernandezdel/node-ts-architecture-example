import express, { Response } from 'express';
import { AuthorResponse } from '../controllers/responses/authors/author-response';
import { Request } from '../controllers/requests/request';
import { CreateAuthorRequest } from '../controllers/requests/authors/create-author';
import * as controller from '../controllers/authors';

const router = express.Router();

router.get('/', async (_, res: Response<AuthorResponse[]>) => {
    const response = await controller.getAll();
    res.status(200).json(response);
});

router.post('/', async (req: Request<CreateAuthorRequest>, res: Response<AuthorResponse>) => {
    const response = await controller.create(req.body);
    res.status(200).json(response);
});

export default router;