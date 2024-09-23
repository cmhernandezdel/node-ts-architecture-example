import express, { Response } from 'express';
import { AuthorResponse } from './responses/authors/author-response';
import { Request } from './requests/request';
import { CreateAuthorRequest } from './requests/authors/create-author';
import * as controller from '../controllers/authors';
import { validateBody } from '../middlewares/validation';
import { CreateAuthorValidationSchema } from './validators/authors/create-author';

const router = express.Router();

router.get('/', async (_, res: Response<AuthorResponse[]>) => {
    const response = await controller.getAll();
    res.status(200).json(response);
});

router.post('/',
    validateBody(CreateAuthorValidationSchema),
    async (req: Request<CreateAuthorRequest>, res: Response<AuthorResponse>) => {
    const response = await controller.create(req.body);
    res.status(200).json(response);
});

export default router;