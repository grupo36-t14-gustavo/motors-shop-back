import { Request, Response } from "express";
import { statusSuccess } from "../../../constants";
import { updateAddressService } from "../../../services/User/Address/updateAddressUser.service";

export const updateAdressController = async (req: Request, res: Response) => {
    const userId = req.user.id;
    const updateData = req.body;
    const updatedAdressController = await updateAddressService(updateData, userId);

    return res.status(statusSuccess.OK).json(updatedAdressController);
};
