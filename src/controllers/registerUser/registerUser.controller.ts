import { Request, Response } from "express";
import { createdUserService } from "../../services/registerUser/registerUser.service";

export const createdUserController = async(req:Request, resp:Response) =>{
    const userData = req.body;
    const createdNewUser = await createdUserService(userData);
    // eslint-disable-next-line no-magic-numbers
    return resp.status(201).json(createdNewUser);
};