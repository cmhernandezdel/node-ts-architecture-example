import { NextFunction, Response } from "express";
import { Request } from "../routes/requests/request";
import { ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema) => 
    (req: Request<any>, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (err: any) {
            res.status(400).json({
                message: "Validation failed",
                errors: err.errors
            });
        }
    };