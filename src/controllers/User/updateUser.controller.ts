import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { updateUserService } from "../../services/User/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
    const updateData = req.body;

    const updatedUser = await updateUserService(req.user.id, updateData);
    return res.status(statusSuccess.OK).json(updatedUser);
};
