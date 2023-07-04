import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../utils/errorHandler.util";
import { statusError } from "../../constants";
import { generateSecretKeyUtil } from "../../utils/generateRandomSecretKey.util";

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

    const secretKeyLength = 36;
    const secretKey =
        process.env.SECRET_KEY || generateSecretKeyUtil(secretKeyLength);

    const appError = new AppError(
        "Provided Bearer Token is not valid",
        statusError.UNAUTHORIZED
    );

    if (type === "Bearer") {
        try {
            const payload = jwt.verify(token, secretKey);

            console.log(payload);
            console.log(payload.sub);

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
