import { z } from "zod";
import { returnCreatedUserWithPassword } from "../schemas/registerUser/schema.Register";

export type ToffPassword = z.infer<typeof returnCreatedUserWithPassword>