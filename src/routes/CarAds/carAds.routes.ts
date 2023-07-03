import express from "express";
import { createCarAdController } from "../../controllers/CarAds/createCarAds.controller";
import { createCarAdImageController } from "../../controllers/CarPhotos/createCarAdPhotos.controller";
import { deleteAdByAdIdController } from "../../controllers/CarAds/deleteCarAdById.controller";
import { listAdsByUserIdController } from "../../controllers/CarAds/listCarAdsByUserId.controller";
import { validateDataMiddleware } from "../../middlewares/Global/validateData.middleware";
import { verifyTokenMiddleware } from "../../middlewares/Global/verifyToken.middleware";
import { createdCarsAdsSchema } from "../../schemas/CarAds/carAd.schema";
import { listAllCarAdsController } from "../../controllers/CarAds/listAllCarAds.controller";
import { retrieveCarAdController } from "../../controllers/CarAds/retrieveCarAd.controller";
import { updateCarAdController } from "../../controllers/CarAds/updateCarAd.controller";
import { getCarUserNotLoggedControler } from "../../controllers/CarAds/getCarAdsUserNotLogged.controller";

const carAdRouter = express.Router();

carAdRouter.post(
    "/ads/",
    verifyTokenMiddleware,
    // validateDataMiddleware(createdCarsAdsSchema),
    createCarAdController
);

carAdRouter.get("/ads/all/", verifyTokenMiddleware, listAllCarAdsController);

carAdRouter.get(
    "/ads/:userId?",
    verifyTokenMiddleware,
    listAdsByUserIdController
);

carAdRouter.get("/ad/:carAdId", verifyTokenMiddleware, retrieveCarAdController);

// carAdRouter.patch(
//     "/ads/:carAdId",
//     verifyTokenMiddleware,
//     updateCarAdController
// );

carAdRouter.delete(
    "/ads/:carId",
    verifyTokenMiddleware,
    deleteAdByAdIdController
);

carAdRouter.post("/ads/:carId", createCarAdImageController);
carAdRouter.get("", getCarUserNotLoggedControler);

export default carAdRouter;
