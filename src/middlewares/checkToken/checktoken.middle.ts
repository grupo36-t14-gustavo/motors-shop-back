import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
const verifyTokenIsValid = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    const missingtoken = 401;
    const acces = 1;
    let token = req.headers.authorization;
    if (!token) {
        throw new AppError("Missing bearer token", missingtoken);
    }
    token = token.split(" ")[acces];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded:any) => {
        if (error) {
            throw new AppError(error.message, missingtoken);
        }
        req.users = decoded;
        req.users = {
            id: decoded.sub,
        };
      
    });

    return next();
};

export { verifyTokenIsValid };

