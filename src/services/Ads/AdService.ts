import { PrismaClient, Car } from "@prisma/client";

const prisma = new PrismaClient();

const listAdsByUserIdService = async (userId: string): Promise<Car[]> => {
    try {
        const ads = await prisma.car.findMany({
            where: {
                ownerId: {
                    id: userId
                },
            },
            include: {
                ownerId: true,
            },
        });
        return ads;
    } catch (error) {
        throw new Error("Erro ao obter os anúncios.");
    }
};

// const deleteAdByAdIdService = async (adId: string, userId: string): Promise<void> => {
//     try {
//         const ad = await prisma.car.findUnique({
//             where: {
//                 id: adId,
//             },
//         });

//         if (!ad) {
//             throw new Error("Anúncio não encontrado.");
//         }

//         if (ad.ownerId !== userId) {
//             throw new Error("Você não tem permissão para excluir este anúncio.");
//         }

//         await prisma.car.delete({
//             where: {
//                 id: adId,
//             },
//         });
//     } catch (error) {
//         throw new Error("Erro ao excluir o anúncio.");
//     }
// };

export {
    listAdsByUserIdService,
    // deleteAdByAdIdService
};