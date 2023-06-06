import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
    statusCode: number;
    // eslint-disable-next-line no-magic-numbers
    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
const handlreErrors = async (
    error: Error,req: Request,res: Response, _:NextFunction)=> {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    if (error instanceof ZodError) {
        // eslint-disable-next-line no-magic-numbers
        return res.status(400).json({
            message: error.flatten().fieldErrors,
        });
    }
    if (error instanceof ZodError) {
        // eslint-disable-next-line no-magic-numbers
        return res.status(400).json(error.flatten().fieldErrors);
    }
    console.log(error);
    // eslint-disable-next-line no-magic-numbers
    return res.status(500).json({
        message: "Internal server error",
    });
};

export { AppError, handlreErrors };

