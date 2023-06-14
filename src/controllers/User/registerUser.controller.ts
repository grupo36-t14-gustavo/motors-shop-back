import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createdUserService } from "../../services/User/registerUser.service";

export const registerUserController = async(req:Request, resp:Response) =>{
    const userData = req.body;
    const addressData=req.body.address;
    const idUser = req.user.id;
    const createdNewUser = await createdUserService(userData, addressData, idUser);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);

};