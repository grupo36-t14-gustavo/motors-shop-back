import { Address, PrismaClient } from "@prisma/client";
import { statusError } from "../../constants";
import { TReturnAddress } from "../../interfaces/User/user.Interface";
import { createdAdress } from "../../schemas/User/userAddress.schema";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const createUserAddressService = async (
    addressData: Address,
    userId: string
): Promise<TReturnAddress> => {
    try {
        const newAddress = await prisma.address.create({
            data: {
                ...addressData,
                userId: userId,
            },
        });

        const parseUser = createdAdress.parse(newAddress);
        return parseUser;
    } catch (error) {
        throw new AppError("check the fields", statusError.BAD_REQUEST);
    }
};
