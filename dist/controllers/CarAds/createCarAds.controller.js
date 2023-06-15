"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCarAdController = void 0;
const constants_1 = require("../../constants");
const createCarAd_service_1 = require("../../services/CarAds/createCarAd.service");
const createCarAdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const carData = req.body;
    carData.ownerId = req.user.id;
    const newCarAds = yield (0, createCarAd_service_1.createCarAdService)(carData, req.user.id);
    return resp.status(constants_1.statusSuccess.CREATED).json(newCarAds);
});
exports.createCarAdController = createCarAdController;
