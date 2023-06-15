import { z } from "zod";
import { createdAdress } from "../schemas/User/userAddress";
import { createdLoginSchema } from "../schemas/User/userLogin.schema";
import { returnCreatedUserWithPassword } from "../schemas/User/userRegister.schema";

export type ToffPassword = z.infer<typeof returnCreatedUserWithPassword>
export type Tlogin = z.infer<typeof createdLoginSchema>
export type TReturnAddress = z.infer<typeof createdAdress>