import { Request, Response } from "express";
import { createCarPhotoService } from "../../services/CarAds/createCarPhoto.service";
import { statusSuccess } from "../../constants";

export const createCarAdImageController = async (
    req: Request,
    resp: Response
) => {
    const carId = req.params.carId;
    const photoData = req.body;

    const result = await createCarPhotoService(photoData, carId);

    return resp.status(statusSuccess.CREATED).json(result);
};
