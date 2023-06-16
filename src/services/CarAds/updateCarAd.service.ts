import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";
import { returnCreatAds } from "../../schemas/CarAds/carAd.schema";

const prisma = new PrismaClient();

export const updateCarAdService = async (req: Request, carId: string) => {
    const carAdData = req.body;
    const updatedCarAd = await prisma.car.update({
        where: {
            id: carId,
        },
        data: carAdData,
    });

    const parsedCarAd = returnCreatAds.parse(updatedCarAd);
    return parsedCarAd;
};
