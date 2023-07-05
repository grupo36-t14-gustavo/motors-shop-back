import { z } from "zod";

const fuelOptions = z.enum([
    "Gasolina",
    "Diesel",
    "Alcool",
    "Flex",
    "Eletrico",
    "Hibrido",
]);

export const CarImageSchema = z.object({
    img: z.string(),
    isMain: z.boolean().default(false),
    carId: z.string(),
});

export const returnCarImage = CarImageSchema.extend({
    id: z.string(),
});

export const createdCarsAdsSchema = z.object({
    title: z.string(),
    brand: z.string(),
    model: z.string(),
    description: z.string(),
    year: z.string(),
    km: z.string(),
    color: z.string(),
    fuelType: fuelOptions,
    price: z.string(),
    priceFipe: z.string(),
    isActive: z.boolean().default(true),

   
});

export const updateCarAdSchema = createdCarsAdsSchema.partial();

export const returnCreatAds = createdCarsAdsSchema.extend({
    id: z.string(),
    ownerId: z.string(),
});
