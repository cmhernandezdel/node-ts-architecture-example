import { z } from "zod";
import { CreateAuthorValidationSchema } from "../../validators/authors/create-author";

export type CreateAuthorRequest = z.infer<typeof CreateAuthorValidationSchema>;