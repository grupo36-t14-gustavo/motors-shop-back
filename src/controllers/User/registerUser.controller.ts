import { Request, Response } from "express";
import { statusError, statusSuccess } from "../../constants";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";
import { createUserService } from "../../services/User/registerUser.service";
import { AppError } from "../../utils/errorHandler.util";

export const registerUserController = async (req: Request, resp: Response) => {
    const userData = req.body;
    const addressData = req.body.address;

    const parseUserData = createdUserSchema.parse(userData);

    const createdNewUser = await createUserService(parseUserData, addressData);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);
};
