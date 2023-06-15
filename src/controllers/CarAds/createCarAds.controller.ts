import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createCarAdService } from "../../services/CarAds/createCarAd.service";

export const createCarAdController = async (req: Request, resp: Response) => {
    const carData = req.body;
    carData.ownerId = req.user.id;

    const newCarAds = await createCarAdService(carData, req.user.id);
    return resp.status(statusSuccess.CREATED).json(newCarAds);
};
