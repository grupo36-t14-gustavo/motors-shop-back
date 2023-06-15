import { Car, PrismaClient } from "@prisma/client";
import { TreturnIdCarAdds } from "../../interfaces/CarAds/carAds.interface";
import { returnCreatAds } from "../../schemas/CarAds/carAd.schema";

const prisma = new PrismaClient();

export const createCarAdService = async (
    carData: Car,
    ownerId: string
): Promise<TreturnIdCarAdds> => {
    const newAdsCar = await prisma.car.create({
        data: {
            ...carData,
            ownerId: ownerId,
        },
    });
    const parseData = returnCreatAds.parse(newAdsCar);
    const newAds = {
        ...parseData,
        ownerId: ownerId,
    };
    return newAds;
};
