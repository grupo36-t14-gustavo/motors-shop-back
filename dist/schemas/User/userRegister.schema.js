"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnCreatedUserWithPassword = exports.returnCreatedUser = exports.createdUserSchema = void 0;
const bcryptjs_1 = require("bcryptjs");
const zod_1 = require("zod");
const charMin = 2;
const charMax = 125;
exports.createdUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(charMin).max(charMax),
    email: zod_1.z.string().email(),
    avatar: zod_1.z.string().default(""),
    password: zod_1.z.string().transform((pass) => {
        return (0, bcryptjs_1.hashSync)(pass);
    }),
    birthdate: zod_1.z.string(),
    cellphone: zod_1.z.string(),
    cpf: zod_1.z.string(),
    bio: zod_1.z.string().optional(),
    isAdmin: zod_1.z.boolean().default(false),
});
exports.returnCreatedUser = exports.createdUserSchema.extend({
    id: zod_1.z.string(),
});
exports.returnCreatedUserWithPassword = exports.returnCreatedUser.omit({
    password: true,
});
