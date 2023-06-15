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
exports.updateCarAdController = void 0;
const updateCarAd_service_1 = require("../../services/CarAds/updateCarAd.service");
const constants_1 = require("../../constants");
const updateCarAdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = req.params.carId;
    const updatedCarAd = yield (0, updateCarAd_service_1.updateCarAdService)(req, carId);
    return res.status(constants_1.statusSuccess.OK).json(updatedCarAd);
});
exports.updateCarAdController = updateCarAdController;
