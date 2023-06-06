import { z } from "zod";
import { createdLoginSchema } from "../schemas/User/schema.Login";
import { returnCreatedUserWithPassword } from "../schemas/User/schema.Register";

export type ToffPassword = z.infer<typeof returnCreatedUserWithPassword>
export type Tlogin = z.infer<typeof createdLoginSchema>