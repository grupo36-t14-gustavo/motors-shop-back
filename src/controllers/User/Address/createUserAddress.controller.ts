import { Request, Response } from "express";
import { statusSuccess } from "../../../constants";
import { createUserAddressService } from "../../../services/User/Address/createUserAdress.service";

export const createUserAdressController = async (
    req: Request,
    resp: Response
) => {
    const userData = req.body;
    const id = req.user.id;

    const createdNewUser = await createUserAddressService(userData, id);
    return resp.status(statusSuccess.CREATED).json(createdNewUser);
};
