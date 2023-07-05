import { PrismaClient } from "@prisma/client";

import {
    TReturnAddress,
    TUpdateAddress,
} from "../../../interfaces/User/user.Interface";
const prisma = new PrismaClient();

// export const updateAddressService = async (
//     updateData: TUpdateAddress,
//     carAdId: string
// ): Promise<TReturnAddress> => {
//     const updatedAdress = prisma.address.update({
//         where: {
//             id: carAdId,
//         },
//         data: updateData,
//     });

//     return updatedAdress;
// };
