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
export const updateAddress = z.object({
    cep: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().nullable().optional(),
 
  });
  
export const returnCreatedAdress = createdAdress.extend({
    id: z.string(),
});

