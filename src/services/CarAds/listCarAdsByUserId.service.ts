import { Car, PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const listAdsByUserIdService = async (userId: string): Promise<Car[]> => {
    try {
        const ads = await prisma.car.findMany({
            where: {
                ownerId: {
                    id: userId
                },
            },
            include: {
                ownerId: true,
            },
        });
        return ads;
    } catch (error) {
        throw new AppError("Erro ao obter os anúncios.");
    }
};


