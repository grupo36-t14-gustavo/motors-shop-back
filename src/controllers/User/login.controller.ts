import { Request, Response } from "express";
import { createdLoginService } from "../../services/User/loginUser.service";

const loginController = async (req: Request, resp: Response) =>{
    const token = await createdLoginService(req.body);
    return resp.json({
        token:token
    });

};
 
export { loginController };
