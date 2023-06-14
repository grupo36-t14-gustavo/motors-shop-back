import { Router } from "express";
import { registerUserController } from "../../controllers/User/registerUser.controller";
import { userLoginController } from "../../controllers/User/userLogin.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { checkEmailMiddleware } from "../../middlewares/User/checkEmail.middleware";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";
import { updateUserSchema } from "../../schemas/User/userUpdate.schema";
import { updateUserController } from "../../controllers/User/updateUser.controller";

const userRouter: Router = Router();

userRouter.post(
    "",
    validateDataMiddleware(createdUserSchema),
    checkEmailMiddleware,
    registerUserController
);

userRouter.patch(
    "",
    validateDataMiddleware(updateUserSchema),
    updateUserController
);

userRouter.post(
    "/login",
    validateDataMiddleware(createdLoginSchema),
    userLoginController
);

export default userRouter;
