import { PrismaClient, User } from "@prisma/client";
import { ToffPassword } from "../../interfaces";
import { returnCreatedUserWithPassword } from "../../schemas/User/schema.Register";

const prisma = new PrismaClient();

export const updateUserService = async (
    userId: string,
    userData: User
): Promise<ToffPassword> => {
    const updatedUser = await prisma.user.update({
        where: {
            id: userId,
        },
        data: userData,
    });

    const parsedUser = returnCreatedUserWithPassword.parse(updatedUser);

    return parsedUser;
};
