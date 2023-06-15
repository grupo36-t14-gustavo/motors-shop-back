import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { createUserService } from "../../services/User/registerUser.service";

export const registerUserController = async (req: Request, resp: Response) => {
    const userData = req.body;

    const createdNewUser = await createUserService(userData);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);
};
