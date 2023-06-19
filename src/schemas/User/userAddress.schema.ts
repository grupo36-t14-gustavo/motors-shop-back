import { z } from "zod";

export const createdAdress = z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().nullable(),
    userId: z.string(),
});

export const returnCreatedAdress = createdAdress.extend({
    id: z.string(),
});

export const updateAddress = createdAdress.partial();