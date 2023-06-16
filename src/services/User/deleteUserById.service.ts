import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteUserByIdService = async (userId: string) => {
    await prisma.address.deleteMany({
        where: {
            userId: userId,
        },
    });
    await prisma.car.deleteMany({
        where: {
            ownerId: userId,
        },
    });
    await prisma.comment.deleteMany({
        where: {
            userId: userId,
        },
    });
    await prisma.carImage.deleteMany({
        where: {
            car: {
                ownerId: userId,
            },
        },
    });
    await prisma.user.delete({
        where: {
            id: userId,
        },
    });
};
