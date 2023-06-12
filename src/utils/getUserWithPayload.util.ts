import { PrismaClient, User } from "@prisma/client";
import { statusError } from "../constants";
import { AppError } from "../errors";
import { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

export const getUserWithPayloadUtil = async (
    payload: JwtPayload
): Promise<User | null> => {
    const existentUser = await prisma.user.findUnique({
        where: {
            id: payload.sub,
        },
    });

    if (!existentUser) {
        throw new AppError(
            "Provided Access Token is not valid",
            statusError.UNAUTHORIZED
        );
    }

    return existentUser;
};
