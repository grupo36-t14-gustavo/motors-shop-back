import { Request, Response } from "express";
import { createdAdsService } from "../../services/CarAds/carAds.service";

export const createdAdsCarController = async(req:Request, resp:Response) =>{
    const created =201;
    const carData = req.body;
   
    carData.ownerId = req.users.id;

    const newCarAds = await createdAdsService(carData,req.users.id);

    return resp.status(created).json(newCarAds);

};