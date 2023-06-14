import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const listAdsByUserIdController = async (
    req: Request,
    res: Response
) => {
    const { userId } = req.params;

    try {
        const ads = await prisma.car.findMany({
            where: {
                ownerId: {
                    id: userId,
                },
            },
            include: {
                ownerId: true,
            },
        });
        res.json(ads);
    } catch (error) {
        console.error(error);
        res.status(statusError.SERVER_ERROR).json({
            error: "Error getting ads.",
        });
    }
};
