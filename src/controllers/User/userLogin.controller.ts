import { Request, Response } from "express";
import { userLoginService } from "../../services/User/userLogin.service";

export const userLoginController = async (req: Request, resp: Response) => {
    const token = await userLoginService(req.body);
    return resp.json({
        token: token,
    });
};
