import { Request, Response } from "express";
import { getCarsUsernotLoggedService } from "../../services/CarAds/getCarAd.userNotLogged.service";

export const getCarUserNotLoggedControler = async(req:Request, resp: Response) =>{
    const data = await getCarsUsernotLoggedService();
    return resp.json(data)

}