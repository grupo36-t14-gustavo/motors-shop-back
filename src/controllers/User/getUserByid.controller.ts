import { Request, Response } from "express";
import { getUserByIdService } from "../../services/User/getUserByid.service";
import { statusSuccess } from "../../constants";

export const getUserByIdController = async (req: Request, resp: Response) => {
    const userId = req.params.userId;

    if (userId) {
        const retrievedUser = await getUserByIdService(userId);
        return resp.status(statusSuccess.OK).json(retrievedUser);
    }

    const retrievedUser = await getUserByIdService(req.user.id);
    return resp.json(retrievedUser);
};
