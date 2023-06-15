import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const listAdsByUserIdController = async (
    req: Request,
    res: Response
) => {
    const { userId } = req.params;
    const ads = await prisma.car.findMany({
        where: {
            ownerId: userId,
        },
        include: {
            owner: true,
        },
    });
    res.json(ads);
};
