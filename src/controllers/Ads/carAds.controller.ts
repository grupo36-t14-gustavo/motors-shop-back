import { Request, Response } from "express";
import { createdAdsService } from "../../services/CarAds/carAds.service";

export const createdAdsCarController = async(req:Request, resp:Response) =>{
    const created =201;
    const carData = req.body;
   
    carData.ownerId = req.user.id;

    const newCarAds = await createdAdsService(carData,req.user.id);

    return resp.status(created).json(newCarAds);

};