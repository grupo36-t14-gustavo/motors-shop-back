import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { statusError } from "../../constants";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const checkEmailMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { email } = req.body;
    if (!req.body.email) {
        return next();
    }
  
  
    try {
        const duplicatedEmail = await prisma.user.findUnique({
            where: { email },
        });
  
        if (duplicatedEmail) {
            const error = new AppError("Email already exists", statusError.CONFLICT);
            return next(error);
        }
  
        return next();
    } catch (error) {
        console.error(error);
        const internalError = new AppError("Internal server error", statusError.SERVER_ERROR);
        return next(internalError);
    }
};

