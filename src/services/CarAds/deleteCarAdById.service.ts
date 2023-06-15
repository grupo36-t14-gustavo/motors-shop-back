import { PrismaClient } from "@prisma/client";
import { statusError } from "../../constants";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const deleteCarAdByIdService = async (
    userId: string,
    adId: string
): Promise<void> => {
    const ad = await prisma.car.findUnique({
        where: {
            id: adId,
        },
    });

    if (!ad) {
        throw new AppError("Ad not found.", statusError.BAD_REQUEST);
    }

    if (ad.ownerId !== userId) {
        throw new AppError(
            "You do not have permission to delete this ad.",
            statusError.FORBIDDEN
        );
    }

    await prisma.car.delete({
        where: {
            id: adId,
        },
    });
};
