import { z } from "zod";
import {
    CarImageSchema,
    createdCarsAdsSchema,
    returnCreatAds,
    updateCarAdSchema,
} from "../../schemas/CarAds/carAd.schema";

export type ToffIdCarsAdds = z.infer<typeof createdCarsAdsSchema>;
export type TupdateCarAd = z.infer<typeof updateCarAdSchema>;
export type TreturnIdCarAdds = z.infer<typeof returnCreatAds>;
export type TreturnPhotoCar = z.infer<typeof CarImageSchema>;
