import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../utils/errorHandler.util";
import { PrismaClient } from "@prisma/client";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const verifyTokenIsValid = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    const access = 1;
    let token = req.headers.authorization;
    if (!token) {
        throw new AppError("Missing bearer token", statusError.UNAUTHORIZED);
    }
    token = token.split(" ")[access];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
    jwt.verify(token, process.env.SECRET_KEY!, async (error, decoded: any) => {
        if (error) {
            throw new AppError(error.message, statusError.UNAUTHORIZED);
        }
        req.user = decoded;
        req.user = {
            id: decoded.sub,
            cars: await prisma.car.findMany({
                where: {
                    ownerId: decoded.sub,
                },
            }),
        };
    });

    return next();
};
