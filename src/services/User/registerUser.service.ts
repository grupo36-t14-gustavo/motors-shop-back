import { PrismaClient, User } from "@prisma/client";
import { ToffPassword } from "../../interfaces/User/user.Interface";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";

const prisma = new PrismaClient();

export const createUserService = async (
    userData: User
): Promise<ToffPassword> => {
    const newUser = await prisma.user.create({
        data: userData,
    });

    const parsedUser = returnCreatedUserWithPassword.parse(newUser);
    return parsedUser;
};
