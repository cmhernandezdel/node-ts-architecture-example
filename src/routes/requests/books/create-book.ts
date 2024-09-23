import { z } from "zod";
import { CreateBookValidationSchema } from "../../validators/books/create-book";

export type CreateBookRequest = z.infer<typeof CreateBookValidationSchema>;