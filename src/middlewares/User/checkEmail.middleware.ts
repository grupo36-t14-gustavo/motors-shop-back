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

    const duplicatedEmail = await prisma.user.findUnique({
        where: { email },
    });

    if (duplicatedEmail) {
        throw new AppError("Email already exists", statusError.CONFLICT);
    }

    next();
};
