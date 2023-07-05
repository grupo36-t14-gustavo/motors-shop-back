import { Request, Response } from "express";
import { retrieveCarAdService } from "../../services/CarAds/retrieveCarAd.service";
import { statusSuccess } from "../../constants";

export const retrieveCarAdController = async (req: Request, res: Response) => {
    const carAdId = req.params.carAdId;
    const retrievedCarAd = await retrieveCarAdService(carAdId);

    return res.status(statusSuccess.OK).json(retrievedCarAd);
};
