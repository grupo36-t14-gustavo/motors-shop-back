import { Request, Response } from "express";
import { statusError, statusSuccess } from "../../constants";
import { deleteUserById } from "../../services/User/deleteUserById.service";

export const deleteUserByIdController = async (req:Request, resp:Response)=>{
    const idUser = req.user.id;
    const deleteUser = await deleteUserById(idUser);
    if(deleteUser){
        return resp.status(statusSuccess.OK).json({menssage: "Usuário deletado com sucesso!"});
    }
    else{
        return resp.status(statusError.BAD_REQUEST).json({message: "Usuário não encontrato"});
    }
};