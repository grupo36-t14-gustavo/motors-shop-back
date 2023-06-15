import * as dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import { statusError } from "../constants";
import { AppError } from "./errorHandler.util";

dotenv.config();

export const getPayloadUtil = (request: Request): JwtPayload => {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    if (type === "Bearer") {
        try {
            const payload = jwt.verify(token, `${process.env.SECRET_KEY}`);

            if (typeof payload !== "string") {
                return payload;
            }
        } catch {
            throw new AppError(
                "Provided Access Token is not valid",
                statusError.UNAUTHORIZED
            );
        }
    }
    throw new AppError(
        "Access token was not provided",
        statusError.UNAUTHORIZED
    );
};
