import { z } from "zod";

export const CreateAuthorValidationSchema = z.object({
    name: z.string().min(1),
    birthDate: z.coerce.date().optional(),
    country: z.string().min(1).optional()
});