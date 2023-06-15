import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { statusError } from "../constants";

export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = statusError.BAD_REQUEST) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorHandlerUtil = async (
    error: Error,
    req: Request,
    res: Response,
    _: NextFunction
) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    if (error instanceof ZodError) {
        return res.status(statusError.BAD_REQUEST).json({
            message: error.flatten().fieldErrors,
        });
    }

    return res.status(statusError.SERVER_ERROR).json({
        message: "Internal server error",
    });
};
