import { Request, Response } from "express";
import { AppError } from "../../errors";
import { createdPhotoCarService } from "../../services/CarAds/carAdsImg.service";

const created = 201;

export const createdPhotoController = async(req:Request, resp:Response) =>{

    try {
        const carId = req.params.carId;
        const photoData = req.body;
        const result = await createdPhotoCarService(photoData,carId);
        return resp.status(created).json(result);
    } catch (error) {
        console.log(error);
        throw new AppError("Ops algo deu errado");
    }
};