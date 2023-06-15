import { Request, Response } from "express";
import { getUserByIdService } from "../../services/User/getUserByid.service";
export const getUserByIdController =async(req:Request, resp:Response)=>{

    const userId = req.user.id;
    const infoUser = await getUserByIdService(userId);
    return resp.json(infoUser);
};