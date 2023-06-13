import { NextFunction, Request, Response } from "express";
import { statusError } from "../../constants";
import { AppError } from "../../utils/errorHandler.util";
import { getPayloadUtil, } from "../../utils/getPayload.util";
import { getUserWithPayloadUtil } from "../../utils/getUserWithPayload.util";

export const secureRoutesMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const payload = getPayloadUtil(req);
    const existentUser = await getUserWithPayloadUtil(payload);

    if (!existentUser) {
        throw new AppError(
            "Provided Access Token is not valid",
            statusError.UNAUTHORIZED
        );
    }

    next();
};
