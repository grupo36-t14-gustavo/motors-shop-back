import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const serverError = 500;
const forbiddenError = 403;
const notFoundError = 404;

const listAdsByUserIdController = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const ads = await prisma.car.findMany({
            where: {
                ownerId: {
                    id: userId
                }
            },
            include: {
                ownerId: true
            }
        });
        res.json(ads);
    } catch (error) {
        console.error(error);
        res.status(serverError).json({ error: "Error getting ads." });
    }
};

const deleteAdByAdIdController = async (req: Request, res: Response) => {
    const { carId } = req.params;

    try {
        const ad = await prisma.car.findUnique({
            where: {
                id: carId,
            },
        });

        if (!ad) {
            return res.status(notFoundError).json({ error: "Ad not found." });
        }

        if (ad !== req.user.cars.id) {
            return res.status(forbiddenError).json({ error: "You do not have permission to delete this ad." });
        }

        await prisma.car.delete({
            where: {
                id: carId
            },
        });
        res.json({ message: "Anúncio excluído com sucesso." });
    } catch (error) {
        console.error(error);
        res.status(serverError).json({ error: "Erro ao excluir o anúncio." });
    }
};

export {
    listAdsByUserIdController,
    deleteAdByAdIdController
};