import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createdAddressService } from "../../services/User/addressUser.service";

export const createdAdrresController = async(req:Request, resp:Response) =>{
    const userData = req.body;
    const id = req.user.id;
 
    const createdNewUser = await createdAddressService(userData,id);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);

};