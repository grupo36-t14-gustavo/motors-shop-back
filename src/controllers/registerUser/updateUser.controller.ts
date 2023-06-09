import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { updateUserService } from "../../services/User/updateUser.service";
import { getPayloadUtil } from "../../utils/getPayload.util";
import { getUserWithPayloadUtil } from "../../utils/getUserWithPayload.util";

export const updateUserController = async (req: Request, res: Response) => {
    const updateData = req.body;

    const payload = getPayloadUtil(req);
    const user = await getUserWithPayloadUtil(payload);

    if (user) {
        const updatedUser = await updateUserService(user.id, updateData);
        return res.status(statusSuccess.OK).json(updatedUser);
    }
};
