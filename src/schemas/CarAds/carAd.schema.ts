// import {z} from "zod";

// const fuelOptions = z.enum()

// const createdCarsAdsSchema = z.object({
//     title: z.string(),
//     brand: z.string(),
//     model: z.string(),
//     description: z.string(),
//     year: z.string(),
//     km: z.string(),
//     color: z.string(),
// });

// title String
// brand String
// model String 
// description String
// year Int
// km Int
// color String
// fuelType FuelOptions
// price Float
// isActive Boolean @default(true)
// // ownerId String
// ownerId User @relation(fields: [id], references: [id])
// createAt DateTime @default(now())
// images CarImage[]
// comments Comment[]