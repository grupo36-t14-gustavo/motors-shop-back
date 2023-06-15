import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";

const prisma = new PrismaClient();
export const deleteUserById = async(userId:string) =>{
    try {
        await prisma.address.deleteMany({
            where:{
                userId:userId
            }
        });
        await prisma.car.deleteMany({
            where:{
                ownerId: userId
            }
        });
        await prisma.comment.deleteMany({
            where:{
                userId:userId
            }
        });
        await prisma.carImage.deleteMany({
            where:{
                car:{
                    ownerId:userId
                }
            }
        });
        await prisma.user.delete({
            where:{
                id: userId
            }
        });
        return true;
    } catch (error) {
        console.log(error);
        throw new AppError("Falha ao excluir o usuário.");
    }
 
  
};
