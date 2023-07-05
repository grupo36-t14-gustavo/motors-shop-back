import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../utils/errorHandler.util";
import { SECRET_KEY, statusError } from "../../constants";

export const verifyTokenMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    const [type, token] = req.headers.authorization?.split(" ") ?? [];

    if (!token) {
        throw new AppError(
            "Bearer token was not provided",
            statusError.UNAUTHORIZED
        );
    }

    const appError = new AppError(
        "Provided Bearer Token is not valid",
        statusError.UNAUTHORIZED
    );

    if (type === "Bearer") {
        try {
            const payload = jwt.verify(token, SECRET_KEY);

            if (typeof payload !== "string" && payload.sub) {
                req.user = {
                    id: payload.sub,
                };

                next();
            }
        } catch {
            throw appError;
        }
    } else {
        throw appError;
    }
};
