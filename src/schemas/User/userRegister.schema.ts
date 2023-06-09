import { hashSync } from "bcryptjs";
import { z } from "zod";
import { createdAdress } from "./userAddress.schema";

const charMin = 2;
const charMax = 125;

export const createdUserSchema = z.object({
    name: z.string().min(charMin).max(charMax),
    email: z.string().email(),
    avatar: z.string().default(""),
    password: z.string().transform((pass) => {
        return hashSync(pass);
    }),
    birthdate: z.string(),
    cellphone: z.string(),
    cpf: z.string(),
    bio: z.string().nullable(),
    isAdmin: z.boolean().default(false),
    
});

export const registerUserAndAddress = z.object({
    name: z.string().min(charMin).max(charMax),
    email: z.string().email(),
    avatar: z.string().default(""),
    password: z.string().transform((pass) => {
        return hashSync(pass);
    }),
    birthdate: z.string(),
    cellphone: z.string(),
    cpf: z.string(),
    bio: z.string().nullable(),
    isAdmin: z.boolean().default(false),
    address:createdAdress
});

export const returnCreatedUser = createdUserSchema.extend({
    id: z.string(),
    
});

export const returnCreatedUserWithPassword = returnCreatedUser.omit({
    password: true,
});
