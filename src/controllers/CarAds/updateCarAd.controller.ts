import { Request, Response } from "express";
import { updateCarAdService } from "../../services/CarAds/updateCarAd.service";
import { statusSuccess } from "../../constants";

export const updateCarAdController = async (req: Request, res: Response) => {
    const carId = req.params.carId;

    const updatedCarAd = await updateCarAdService(req.body, carId);
    return res.status(statusSuccess.OK).json(updatedCarAd);
};
