import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { Tlogin } from "../../interfaces/user.Interface";
import { AppError } from "../../utils/errorHandler.util";
const prisma = new PrismaClient();
const errorCredentials = 401;
const createdLoginService = async(loginData: Tlogin): Promise<string> =>{

    const user = await prisma.user.findUnique({
        where:{
            email:loginData.email
        }
    });
    if(!user){
        throw new AppError("Ivalid credentials", errorCredentials);
    }
    const passwordMatch = await compare(loginData.password, user.password);
    if (!passwordMatch){
        throw new AppError("Invalid credentials", errorCredentials);
    }
    const secretKey = process.env.SECRET_KEY;
    if(!secretKey){
        throw new AppError("Secret key is not provider.");
    }
    const token: string = jwt.sign(
        {
            id: user.id
        },
        secretKey,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    );
    return token;

};
export { createdLoginService };

