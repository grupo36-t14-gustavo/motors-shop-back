import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";

const prisma = new PrismaClient();

export const updateCarAdService = async (req: Request, carId: string) => {
    const carAdData = req.body;

    const updatedCarAd = await prisma.car.update({
        where: {
            id: carId,
        },
        data: carAdData,
    });

    const parsedCarAd = returnCreatedUserWithPassword.parse(updatedCarAd);

    return parsedCarAd;
};
