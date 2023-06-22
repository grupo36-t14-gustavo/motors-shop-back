import { z } from "zod";
import { createdAdress } from "../../schemas/User/userAddress.schema";
import { createdLoginSchema } from "../../schemas/User/userLogin.schema";
import { createdUserSchema, registerUserAndAddress, returnCreatedUserWithPassword } from "../../schemas/User/userRegister.schema";

export type ToffPassword = z.infer<typeof returnCreatedUserWithPassword>;
export type Tlogin = z.infer<typeof createdLoginSchema>;
export type TReturnAddress = z.infer<typeof createdAdress>;
export type TuserRegister = z.infer<typeof createdUserSchema>
export type TreturnRegister = z.infer<typeof registerUserAndAddress>
