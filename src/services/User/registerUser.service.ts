import { PrismaClient, User } from "@prisma/client";
import { AppError } from "../../errors";
import { ToffPassword } from "../../interfaces";
import { returnCreatedUserWithPassword } from "../../schemas/registerUser/schema.Register";

const prisma = new PrismaClient();

export const createdUserService = async(userData: User): Promise<ToffPassword> =>{
    try {
        const newUser = await prisma.user.create({
            data:userData,
        });
        const parseUser = returnCreatedUserWithPassword.parse(newUser);
        return parseUser;
    } catch (error) {
        console.log(error);
        // eslint-disable-next-line no-magic-numbers
        throw new AppError("check the fields", 404);
    }
};