import express from "express";
import { createdAdsCarController } from "../../controllers/Ads/carAds.controller";
import { createdPhotoController } from "../../controllers/Ads/carAdsImage.controller";
import { deleteAdByAdIdController } from "../../controllers/CarAds/deleteCarAdById.controller";
import { listAdsByUserIdController } from "../../controllers/CarAds/listCarAdsById.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { verifyTokenIsValid } from "../../middlewares/checkToken/checktoken.middle";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";

const carAdRouter = express.Router();

carAdRouter.post("/ads", verifyTokenIsValid,validateDataMiddleware(createdCarsAdsSchema),createdAdsCarController);
carAdRouter.post("/car-ads/:carId", createdPhotoController);

carAdRouter.get("/ads/:userId", listAdsByUserIdController);
carAdRouter.delete("/ads/:carId", deleteAdByAdIdController);

export default carAdRouter;
