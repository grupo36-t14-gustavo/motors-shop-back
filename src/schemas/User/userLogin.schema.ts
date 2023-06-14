import { z } from "zod";

export const createdLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
