import { Router } from "express";
import { createdUserController } from "../controllers/User/registerUser.controller";
import { checkEmailMiddle } from "../middlewares/checkEmail/checkEmail";
import { validateDataMiddleware } from "../middlewares/validatedData/validatedData";
import { createdUserSchema } from "../schemas/registerUser/schema.Register";

const userRouter: Router = Router();


userRouter.post("",validateDataMiddleware(createdUserSchema), checkEmailMiddle, createdUserController);

export default userRouter ;

