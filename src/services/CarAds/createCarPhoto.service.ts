import { CarImage, PrismaClient } from "@prisma/client";
import { TreturnPhotoCar } from "../../interfaces/CarAds/carAds.interface";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const createCarPhotoService = async (
    photoData: CarImage,
    carId: string
): Promise<TreturnPhotoCar> => {
    try {
        const car = await prisma.car.findUnique({ where: { id: carId } });
        if (!car) {
            throw new AppError("car not found");
        }
        const newImageCar = await prisma.carImage.create({
            data: {
                ...photoData,
                carId: car.id,
            },
        });
        return newImageCar;
    } catch (error) {
        console.log(error);
        throw new AppError("verify the fields");
    }
};
