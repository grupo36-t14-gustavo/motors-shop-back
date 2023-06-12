import { Router } from "express";
import { registerUserController } from "../../controllers/User/registerUser.controller";
import { userLoginController } from "../../controllers/User/userLogin.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { checkEmailMiddleware } from "../../middlewares/User/checkEmail.middleware";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";

const userRouter:Router = Router();

userRouter.post("",validateDataMiddleware(createdUserSchema), checkEmailMiddleware, registerUserController);
userRouter.post("/login", validateDataMiddleware(createdLoginSchema),userLoginController);

export default userRouter;



