import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const prisma = new PrismaClient();

const checkEmailMiddle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.body.email) {
        return next();
    }

    const { email } = req.body;

    try {
        const duplicatedEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (duplicatedEmail) {
            // eslint-disable-next-line no-magic-numbers
            throw new AppError("Email already exists", 409);
        }

        return next();
    } catch (error) {
        console.error(error);
        // eslint-disable-next-line no-magic-numbers
        throw new AppError("Internal server error", 500);
    }
};

export { checkEmailMiddle };

