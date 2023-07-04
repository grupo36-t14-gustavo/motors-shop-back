import "dotenv/config";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { Tlogin } from "../../interfaces/User/user.Interface";
import { AppError } from "../../utils/errorHandler.util";
import { SECRET_KEY, statusError } from "../../constants";

const prisma = new PrismaClient();

export const userLoginService = async (loginData: Tlogin): Promise<string> => {
    const user = await prisma.user.findUnique({
        where: {
            email: loginData.email,
        },
    });

    if (!user) {
        throw new AppError("Ivalid credentials", statusError.UNAUTHORIZED);
    }
    const passwordMatch = await compare(loginData.password, user.password);
    if (!passwordMatch) {
        throw new AppError("Invalid credentials", statusError.UNAUTHORIZED);
    }

    const token: string = jwt.sign(
        {
            id: user.id,
        },
        SECRET_KEY,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id),
        }
    );

    return token;
};
