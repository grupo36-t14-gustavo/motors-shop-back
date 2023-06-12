import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const deleteAdByAdIdController = async (req: Request, res: Response) => {
    const { carId } = req.params;

    try {
        const ad = await prisma.car.findUnique({
            where: {
                id: carId,
            },
        });

        if (!ad) {
            return res
                .status(statusError.BAD_REQUEST)
                .json({ error: "Ad not found." });
        }

        if (ad !== req.user.cars.id) {
            return res
                .status(statusError.FORBIDDEN)
                .json({ error: "You do not have permission to delete this ad." });
        }

        await prisma.car.delete({
            where: {
                id: carId,
            },
        });
        res.json({ message: "Anúncio excluído com sucesso." });
    } catch (error) {
        console.error(error);
        res
            .status(statusError.NOT_FOUND)
            .json({ error: "Erro ao excluir o anúncio." });
    }
};
