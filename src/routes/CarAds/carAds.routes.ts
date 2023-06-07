import { Router } from "express";
import { createdAdsCarController } from "../../controllers/Ads/carAds.controller";
import { verifyTokenIsValid } from "../../middlewares/checkToken/checktoken.middle";
import { validateDataMiddleware } from "../../middlewares/validatedData/validatedData";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";
const carRouter:Router = Router();

carRouter.post("/car-ads", verifyTokenIsValid,validateDataMiddleware(createdCarsAdsSchema),createdAdsCarController);

export default carRouter;