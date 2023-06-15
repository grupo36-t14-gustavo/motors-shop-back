import { Router } from "express";
import { createdAdrresController } from "../../controllers/User/addresUser.controller";
import { deleteUserByIdController } from "../../controllers/User/deleteUserbyId.controller";
import { getUserByIdController } from "../../controllers/User/getUserByid.controller";
import { registerUserController } from "../../controllers/User/registerUser.controller";
import { userLoginController } from "../../controllers/User/userLogin.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { checkEmailMiddleware } from "../../middlewares/User/checkEmail.middleware";
import { verifyTokenIsValid } from "../../middlewares/checkToken/checktoken.middle";
import { createdAdress } from "../../schemas/User/userAddress";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";

const userRouter: Router = Router();

userRouter.post(
    "",
    validateDataMiddleware(createdUserSchema),
    checkEmailMiddleware,
    registerUserController
);
userRouter.post(
    "/login",
    validateDataMiddleware(createdLoginSchema),
    userLoginController
);
userRouter.post(
    "/address",
    verifyTokenIsValid,
    validateDataMiddleware(createdAdress),
    createdAdrresController
);
userRouter.get("/info", verifyTokenIsValid, getUserByIdController);
userRouter.delete(
    "/deleteAccount",
    verifyTokenIsValid,
    deleteUserByIdController
);
export default userRouter;
