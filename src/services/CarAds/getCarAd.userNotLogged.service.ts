import {PrismaClient, Car, CarImage, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

export const getCarsUsernotLoggedService = async()=>{
    const carAndImage = await prisma.car.findMany({
        include:{
            images: true,
        }
    })
    return carAndImage

}
