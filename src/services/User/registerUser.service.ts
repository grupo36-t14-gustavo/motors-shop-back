import { Address, PrismaClient, User } from "@prisma/client";
import { statusError } from "../../constants";
import { ToffPassword } from "../../interfaces/user.Interface";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";
import { AppError } from "../../utils/errorHandler.util";
const prisma = new PrismaClient();

export const createdUserService = async(userData: User, addressData: Address, userId: string): Promise<ToffPassword> =>{
    try {
        const newUser = await prisma.user.create({
            data:userData,
        });
        const newAddress = await prisma.address.create({
            data:{
                ...addressData,
                userId: userId,
            },

        });
        const userWithAddress = { ...newUser, address: newAddress };

        const parseUser = returnCreatedUserWithPassword.parse(userWithAddress);
        return parseUser;
    } catch (error) {
        console.log(error);
        
        throw new AppError("check the fields", statusError.BAD_REQUEST);
    }
};
