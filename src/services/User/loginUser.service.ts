import "dotenv/config";
import jwt from "jsonwebtoken";
import * as crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { Tlogin } from "../../interfaces/User/user.Interface";
import { AppError } from "../../utils/errorHandler.util";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const userLoginService = async (loginData: Tlogin): Promise<string> => {
    const secretKeyLength = 36;

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
    const secretKey = process.env.SECRET_KEY || "akljçgslkgerph342643p72";
    // crypto.randomBytes(secretKeyLength, (err, buf) => {
    //     let resultKey = "";

    //     if (err) {
    //         console.log(err);
    //         return;
    //     }

    //     console.log(buf);
    //     resultKey += buf.toString("hex");
    //     return resultKey;
    // });

    const token: string = jwt.sign(
        {
            id: user.id,
        },
        secretKey,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id),
        }
    );
    return token;
};
