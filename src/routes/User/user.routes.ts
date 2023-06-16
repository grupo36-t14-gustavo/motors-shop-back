import { Router } from "express";
import { createUserAdressController } from "../../controllers/User/createUserAddress.controller";
import { deleteUserByIdController } from "../../controllers/User/deleteUserbyId.controller";
import { getUserByIdController } from "../../controllers/User/getUserByid.controller";
import { registerUserController } from "../../controllers/User/registerUser.controller";
import { userLoginController } from "../../controllers/User/userLogin.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { checkEmailMiddleware } from "../../middlewares/User/checkEmail.middleware";
import { verifyTokenIsValid } from "../../middlewares/Global/checktoken.middleware";
import { createdAdress } from "../../schemas/User/userAddress.schema";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { createdUserSchema } from "../../schemas/User/userRegister.schema";
import { updateUserController } from "../../controllers/User/updateUser.controller";
import { updateUserSchema } from "../../schemas/User/userUpdate.schema";

const userRouter: Router = Router();

userRouter.post(
    "",
    validateDataMiddleware(createdUserSchema),
    checkEmailMiddleware,
    registerUserController
);
userRouter.get("", verifyTokenIsValid, getUserByIdController);

userRouter.patch(
    "",
    verifyTokenIsValid,
    validateDataMiddleware(updateUserSchema),
    updateUserController
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
    createUserAdressController
);
userRouter.delete("", verifyTokenIsValid, deleteUserByIdController);

export default userRouter;
