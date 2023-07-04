import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createCarAdService } from "../../services/CarAds/createCarAd.service";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";

export const createCarAdController = async (req: Request, resp: Response) => {
    const carData = req.body;
    carData.ownerId = req.user.id;

    const createCar = createdCarsAdsSchema.parse(carData);
    const dataPhoto = req.body.images;
    const newCarAds = await createCarAdService(
        createCar,
        dataPhoto,
        req.user.id
    );

    return resp.status(statusSuccess.CREATED).json(newCarAds);
};
