"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createCarAds_controller_1 = require("../../controllers/CarAds/createCarAds.controller");
const createCarAdPhotos_controller_1 = require("../../controllers/CarPhotos/createCarAdPhotos.controller");
const deleteCarAdById_controller_1 = require("../../controllers/CarAds/deleteCarAdById.controller");
const listCarAdsById_controller_1 = require("../../controllers/CarAds/listCarAdsById.controller");
const validatedData_1 = require("../../middlewares/Global/validatedData");
const checktoken_middleware_1 = require("../../middlewares/Global/checktoken.middleware");
const carAd_schema_1 = require("../../schemas/CarAds/carAd.schema");
const carAdRouter = express_1.default.Router();
carAdRouter.post("/ads", checktoken_middleware_1.verifyTokenIsValid, (0, validatedData_1.validateDataMiddleware)(carAd_schema_1.createdCarsAdsSchema), createCarAds_controller_1.createCarAdController);
carAdRouter.get("/ads/:userId", listCarAdsById_controller_1.listAdsByUserIdController);
carAdRouter.delete("/ads/:carId", checktoken_middleware_1.verifyTokenIsValid, deleteCarAdById_controller_1.deleteAdByAdIdController);
carAdRouter.post("/ads/:carId", createCarAdPhotos_controller_1.createCarAdImageController);
exports.default = carAdRouter;
