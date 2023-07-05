import { Request, Response } from "express";
import { statusSuccess } from "../../../constants";

export const updateAdressController = (req: Request, res: Response) => {

    // const updatedAdressController = await updateAdressService();

    return res.status(statusSuccess.OK).json();
};
