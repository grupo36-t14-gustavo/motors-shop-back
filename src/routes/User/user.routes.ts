import { Router } from "express";
import { deleteUserByIdController } from "../../controllers/User/deleteUserbyId.controller";
import { getUserByIdController } from "../../controllers/User/getUserByid.controller";
import { registerUserController } from "../../controllers/User/registerUser.controller";
import { userLoginController } from "../../controllers/User/userLogin.controller";
import { verifyTokenMiddleware } from "../../middlewares/Global/verifyToken.middleware";
import { validateDataMiddleware } from "../../middlewares/Global/validateData.middleware";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { checkEmailMiddleware } from "../../middlewares/User/checkEmail.middleware";
import { updateUserController } from "../../controllers/User/updateUser.controller";

const userRouter: Router = Router();

userRouter.post("", checkEmailMiddleware, registerUserController);

userRouter.post(
    "/login",
    validateDataMiddleware(createdLoginSchema),
    userLoginController
);

userRouter.get("/:userId?/", getUserByIdController);

userRouter.patch("", verifyTokenMiddleware, updateUserController);

userRouter.delete("", verifyTokenMiddleware, deleteUserByIdController);

export default userRouter;
