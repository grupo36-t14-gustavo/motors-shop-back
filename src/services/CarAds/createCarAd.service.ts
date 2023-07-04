import { Car, PrismaClient } from "@prisma/client";
import { ToffIdCarsAdds, TreturnIdCarAdds, TreturnPhotoCar } from "../../interfaces/CarAds/carAds.interface";
import { returnCreatAds } from "../../schemas/CarAds/carAd.schema";

const prisma = new PrismaClient();

export const createCarAdService = async (
    carData: ToffIdCarsAdds,
    photoData: TreturnPhotoCar,
    ownerId: string
) => {
    const newAdsCar = await prisma.car.create({
        data: {
           ...carData,
           ownerId
          
        },
    });
    const parseData = returnCreatAds.parse(newAdsCar);
    const newAds = {
        ...parseData,
        ownerId: ownerId,
    };
    const newImage = await prisma.carImage.create({
        data:{
            ...photoData,
            carId: parseData.id
        }
    }) 
    const returnData = {
        ...newAds,
         newImage
    }
    
    return returnData;
};
