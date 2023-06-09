import { NextFunction, Request, Response } from "express";
import {
    getPayload,
    getUserWithPayload,
} from "../../utils/retrievePayload.util";
import { AppError } from "../../errors";
import { statusError } from "../../constants";

export const secureRoutesMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const payload = getPayload(req);
    const existentUser = await getUserWithPayload(payload);

    if (!existentUser) {
        throw new AppError(
            "Provided Access Token is not valid",
            statusError.UNAUTHORIZED
        );
    }

    next();
};
