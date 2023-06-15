import { Car, PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const listCarAdsByUserIdService = async (
    userId: string
): Promise<Car[]> => {
    try {
        const ads = await prisma.car.findMany({
            where: {
                ownerId: userId,
            },
            include: {
                owner: true,
            },
        });
        return ads;
    } catch (error) {
        throw new AppError("Erro ao obter os anúncios.");
    }
};
