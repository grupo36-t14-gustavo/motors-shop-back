import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createdUserService } from "../../services/User/registerUser.service";

export const registerUserController = async (req: Request, resp: Response) => {
    const userData = req.body;
 
    const createdNewUser = await createdUserService(userData);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);
};
