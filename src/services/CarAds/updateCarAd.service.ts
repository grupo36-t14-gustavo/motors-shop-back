import { PrismaClient } from "@prisma/client";
import { returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";
import { TupdateCarAd } from "../../interfaces/CarAds/carAds.interface";

const prisma = new PrismaClient();

// export const updateCarAdService = async (
//     carAdData: TupdateCarAd,
//     carAdId: string
// ) => {
//     const updatedCarAd = await prisma.car.update({
//         where: {
//             id: carAdId,
//         },
//         data: carAdData,
//     });

//     const parsedCarAd = returnCreatedUserWithPassword.parse(updatedCarAd);
//     return parsedCarAd;
// };
