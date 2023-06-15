"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnCreatAds = exports.createdCarsAdsSchema = exports.returnCarImage = exports.CarImageSchema = void 0;
const zod_1 = require("zod");
const fuelOptions = zod_1.z.enum([
    "Gasolina",
    "Diesel",
    "Alcool",
    "Flex",
    "Eletrico",
    "Hibrido",
]);
exports.CarImageSchema = zod_1.z.object({
    img: zod_1.z.string(),
    isMain: zod_1.z.boolean().default(false),
    carId: zod_1.z.string(),
});
exports.returnCarImage = exports.CarImageSchema.extend({
    id: zod_1.z.string(),
});
exports.createdCarsAdsSchema = zod_1.z.object({
    title: zod_1.z.string(),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    description: zod_1.z.string(),
    year: zod_1.z.number().int(),
    km: zod_1.z.number().int(),
    color: zod_1.z.string(),
    fuelType: fuelOptions,
    price: zod_1.z
        .number()
        .refine((value) => !Number.isNaN(value) && Number.isFinite(value), {
        message: "Price field must be a decimal/float.",
    }),
    isActive: zod_1.z.boolean().default(true),
});
exports.returnCreatAds = exports.createdCarsAdsSchema.extend({
    id: zod_1.z.string(),
    ownerId: zod_1.z.string(),
});
