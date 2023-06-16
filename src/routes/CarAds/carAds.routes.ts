import express from "express";
import { createCarAdController } from "../../controllers/CarAds/createCarAds.controller";
import { createCarAdImageController } from "../../controllers/CarPhotos/createCarAdPhotos.controller";
import { deleteAdByAdIdController } from "../../controllers/CarAds/deleteCarAdById.controller";
import { listAdsByUserIdController } from "../../controllers/CarAds/listCarAdsById.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validatedData";
import { verifyTokenIsValid } from "../../middlewares/Global/checktoken.middleware";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";
import { updateCarAdController } from "../../controllers/CarAds/updateCarAd.controller";
import { updateCarAdSchema } from "../../schemas/CarAds/updateCarAd.schema";

const carAdRouter = express.Router();

carAdRouter.post(
    "/ads",
    verifyTokenIsValid,
    validateDataMiddleware(createdCarsAdsSchema),
    createCarAdController
);
carAdRouter.get("/ads/:userId", listAdsByUserIdController);

carAdRouter.patch(
    "/ads/:carId",
    verifyTokenIsValid,
    validateDataMiddleware(updateCarAdSchema),
    updateCarAdController
);

carAdRouter.delete("/ads/:carId", verifyTokenIsValid, deleteAdByAdIdController);

carAdRouter.post("/ads/:carId", createCarAdImageController);

export default carAdRouter;
