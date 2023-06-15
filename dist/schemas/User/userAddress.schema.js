"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnCreatedAdress = exports.createdAdress = void 0;
const zod_1 = require("zod");
exports.createdAdress = zod_1.z.object({
    cep: zod_1.z.string(),
    state: zod_1.z.string(),
    city: zod_1.z.string(),
    street: zod_1.z.string(),
    number: zod_1.z.string(),
    complement: zod_1.z.string(),
});
exports.returnCreatedAdress = exports.createdAdress.extend({
    id: zod_1.z.string(),
});
