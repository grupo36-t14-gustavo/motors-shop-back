import { Router } from "express";
import { loginController } from "../controllers/User/login.controller";
import { createdUserController } from "../controllers/User/registerUser.controller";
import { checkEmailMiddle } from "../middlewares/checkEmail/checkEmail";
import { validateDataMiddleware } from "../middlewares/validatedData/validatedData";
import { createdLoginSchema } from "../schemas/User/schema.Login";
import { createdUserSchema } from "../schemas/User/schema.Register";

const userRouter: Router = Router();


userRouter.post("/register",validateDataMiddleware(createdUserSchema), checkEmailMiddle, createdUserController);
userRouter.post("/login", validateDataMiddleware(createdLoginSchema),loginController);


export default userRouter ;

