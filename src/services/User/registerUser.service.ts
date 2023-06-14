import { Address, PrismaClient, User } from "@prisma/client";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const createdUserService = async(userData: User, addressData: Address)=>{
    try {
        const newUser = await prisma.user.create({
            data:{
                ...userData,
                address:{
                    create: addressData
                },
            },
            include:{
                address: true,
            }
        });
        const parseUser = returnCreatedUserWithPassword.parse(newUser);
        return parseUser;
    } catch (error) {
        console.log(error);
        // eslint-disable-next-line no-magic-numbers
        throw new AppError("check the fields", 404);
    }
};
