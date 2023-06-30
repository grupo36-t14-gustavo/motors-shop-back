import { Request, Response } from "express";
import { statusError, statusSuccess } from "../../constants";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";
import { createUserService } from "../../services/User/registerUser.service";
import { AppError } from "../../utils/errorHandler.util";

export const registerUserController = async (req: Request, resp: Response) => {
    try {
        const userData = req.body;
        const addressData = req.body.address;
    
        const parseUserData = createdUserSchema.parse(userData);
    
        const createdNewUser = await createUserService(parseUserData,addressData );
        console.log(createdNewUser,"createdUser");
        return resp.status(statusSuccess.CREATED).json(createdNewUser);
    } catch (error) {
        console.log(error);
        throw new AppError(`internal server error ${error} `,statusError.SERVER_ERROR);
    }
   
};
