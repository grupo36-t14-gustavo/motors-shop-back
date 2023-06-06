import { Request, Response } from "express";
import { createdUserService } from "../../services/registerUser/registerUser.service";

const created = 201;
export const createdUserController = async(req:Request, resp:Response) =>{
    const userData = req.body;
    const createdNewUser = await createdUserService(userData);
    return resp.status(created).json(createdNewUser);
};