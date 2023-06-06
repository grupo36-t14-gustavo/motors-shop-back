import { hashSync } from "bcryptjs";
import { z } from "zod";

export const createdUserSchema = z.object({
    // eslint-disable-next-line no-magic-numbers
    name: z.string().min(2).max(125),
    email: z.string().email(),
    avatar: z.string().default(""),
    pasword: z.string().transform((pass) => {
        return hashSync(pass);
    }),
    birthdate: z.date(),
    cellphone: z.string(),
    cpf: z.string(),
    bio: z.string().optional(),
    isAdmin: z.boolean().default(false),
    createdAt:z.string().optional().default(() => new Date().toISOString()),

});
export const returnCreatedUser = createdUserSchema.extend({
    id: z.string()
});

export const returnCreatedUserWithPassword = returnCreatedUser.omit({pasword:true});