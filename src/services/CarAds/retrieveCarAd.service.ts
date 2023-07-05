import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const retrieveCarAdService = async (carAdId: string) => {
    const retrievedCarAd = await prisma.car.findUnique({
        where: {
            id: carAdId,
        },
    });

    if (!retrievedCarAd) {
        throw new AppError("Car ad not found", statusError.BAD_REQUEST);
    }

    return retrievedCarAd;
};
