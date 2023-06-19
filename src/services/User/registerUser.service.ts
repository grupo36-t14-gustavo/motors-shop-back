import { PrismaClient } from "@prisma/client";
import { TReturnAddress, TuserRegister } from "../../interfaces/User/user.Interface";
import { returnCreatedUser } from "../../schemas/User/userRegister.schema";

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUserService:any = async (userData: TuserRegister, addressData:TReturnAddress ) => {
    let createdUser;

    const newUser = await prisma.user.create({
        data: userData,
    });

    const parsedUser = returnCreatedUser.parse(newUser);
    
    // eslint-disable-next-line prefer-const
    createdUser = parsedUser;
    
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
    console.log("return data",returnData);
        
    return returnData;
  
};
