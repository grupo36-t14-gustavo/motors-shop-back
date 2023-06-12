//export const deleteAdByAdIdService = async (adId: string, userId: string): Promise<void> => {
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