import { z } from "zod";
import { createdCarsAdsSchema, returnCreatAds } from "../../schemas/CarAds/carAd.schema";
export type ToffIdCarsAdds = z.infer<typeof createdCarsAdsSchema>;
export type TreturnIdCarAdds = z.infer <typeof returnCreatAds>
