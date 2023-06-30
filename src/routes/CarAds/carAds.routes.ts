import express from "express";
import { createCarAdController } from "../../controllers/CarAds/createCarAds.controller";
import { createCarAdImageController } from "../../controllers/CarPhotos/createCarAdPhotos.controller";
import { deleteAdByAdIdController } from "../../controllers/CarAds/deleteCarAdById.controller";
import { listAdsByUserIdController } from "../../controllers/CarAds/listCarAdsById.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validateData.middleware";
import { verifyTokenMiddleware } from "../../middlewares/Global/verifyToken.middleware";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";

const carAdRouter = express.Router();

carAdRouter.post(
    "/ads",
    verifyTokenMiddleware,
    validateDataMiddleware(createdCarsAdsSchema),
    createCarAdController
);
carAdRouter.get("/ads/:userId", listAdsByUserIdController);
carAdRouter.delete(
    "/ads/:carId",
    verifyTokenMiddleware,
    deleteAdByAdIdController
);

carAdRouter.post("/ads/:carId", createCarAdImageController);

export default carAdRouter;
