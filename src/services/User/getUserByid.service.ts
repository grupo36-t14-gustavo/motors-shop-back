import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();

export const getUserByIdService = async(userId:string) =>{

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                addresses: true,
                comments:true,
                cars:true
            }
        });
        return user;
    } catch (error) {
        throw new AppError("Falha ao obter informação do usuario");
    }

};