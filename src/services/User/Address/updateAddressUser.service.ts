import { Prisma, PrismaClient } from "@prisma/client";

import {
    TReturnAddress,
    TUpdateAddress,
} from "../../../interfaces/User/user.Interface";
const prisma = new PrismaClient();

export const updateAddressService = async (
    updateData: TUpdateAddress,
    userId: string
):Promise<TUpdateAddress> => {
    const updatedAdress = prisma.address.update({
        where: {
            userId: userId,
        },
        data:{
        cep: updateData.cep,
        state: updateData.state,
        city: updateData.city,
        street: updateData.street,
        number: updateData.number,
        complement: updateData.complement
        } as Prisma.AddressUpdateInput,
    });

    return updatedAdress;
 };
