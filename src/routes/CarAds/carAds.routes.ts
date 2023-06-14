import express from "express";
import { deleteAdByAdIdController } from "../../controllers/CarAds/deleteCarAdById.controller";
import { listAdsByUserIdController } from "../../controllers/CarAds/listCarAdsById.controller";

const carAdRouter = express.Router();

// carRouter.post("/car-ads", verifyTokenIsValid,validateDataMiddleware(createdCarsAdsSchema),createdAdsCarController);
// carRouter.post("/car-ads/:carId", createdPhotoController);

carAdRouter.get("/ads/:userId", listAdsByUserIdController);
carAdRouter.delete("/ads/:carId", deleteAdByAdIdController);

export default carAdRouter;
