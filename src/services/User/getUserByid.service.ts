import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const getUserByIdService = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            address: true,
            comments: true,
            cars: true,
        },
    });

    if (!user) {
        throw new AppError("User not found");
    }

    return user;
};
