import { z } from "zod";
import { Genre } from "../../../shared/enums/genre";

export const CreateBookValidationSchema = z.object({
    name: z.string().min(1),
    publishDate: z.coerce.date(),
    authorId: z.string().uuid().min(1),
    genre: z.enum(Object.values(Genre) as [Genre, ...Genre[]])
});