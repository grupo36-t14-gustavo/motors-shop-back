import { Request, Response } from "express";
import { statusSuccess } from "../../constants";
import { deleteUserByIdService } from "../../services/User/deleteUserById.service";

export const deleteUserByIdController = async (
    req: Request,
    resp: Response
) => {
    const idUser = req.user.id;
    await deleteUserByIdService(idUser);

    return resp.status(statusSuccess.NO_CONTENT).send();
};
