import { Request, Response } from "express";
import { deleteAdByAdIdService } from "../../services/CarAds/deleteCarAdById.service";
import { statusSuccess } from "../../constants";

export const deleteAdByAdIdController = async (req: Request, res: Response) => {
    const userId = req.user.id;
    const carId = req.params.carId;

    await deleteAdByAdIdService(userId, carId);

    res.status(statusSuccess.NO_CONTENT);
};
