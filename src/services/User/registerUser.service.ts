import { PrismaClient } from "@prisma/client";
import { TReturnAddress, TuserRegister } from "../../interfaces/User/user.Interface";
import { returnCreatedUser } from "../../schemas/User/userRegister.schema";

const prisma = new PrismaClient();

export const createUserService = async (userData: TuserRegister, addressData:TReturnAddress ) => {

    const newUser = await prisma.user.create({
        data: userData,
    });

    const parsedUser = returnCreatedUser.parse(newUser);
    
    const createdUser = parsedUser;
    
    const newAddress = await prisma.address.create({
        data: {
            ...addressData,
            userId: createdUser.id,

        },
    });
    const returnData = {
        ...newUser,
        address: newAddress,
    };
        
    return returnData;
  
};