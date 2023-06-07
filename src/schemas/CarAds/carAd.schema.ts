import { z } from "zod";

const fuelOptions = z.enum(["Gasolina","Diesel","Alcool","Flex","Eletrico","hibrido"]);
const carImageSchema = z.object({
    img: z.string(),
    isMain: z.boolean().default(false),
    carId: z.string()
});

export const returnCarImage = carImageSchema.extend({
    id: z.string()
});
export const createdCarsAdsSchema = z.object({
    title: z.string(),
    brand: z.string(),
    model: z.string(),
    description: z.string(),
    year: z.number().int(),
    km: z.number().int(),
    color: z.string(),
    fuelType: fuelOptions,
    price: z.number().refine(value => !Number.isNaN(value) && Number.isFinite(value), {
        message: "O campo price deve ser um número decimal (float).",
    }),
    isActive: z.boolean().default(true),
    

});
export const returnCreatAds = createdCarsAdsSchema.extend({
    id: z.string(),
    ownerId: z.string(),
    // images: CarImage[],
    // comments: Comment[],
});

