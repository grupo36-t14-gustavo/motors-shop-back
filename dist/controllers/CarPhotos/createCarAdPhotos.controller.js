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
exports.createCarAdImageController = void 0;
const createCarPhoto_service_1 = require("../../services/CarAds/createCarPhoto.service");
const constants_1 = require("../../constants");
const createCarAdImageController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = req.params.carId;
    const photoData = req.body;
    const result = yield (0, createCarPhoto_service_1.createCarPhotoService)(photoData, carId);
    return resp.status(constants_1.statusSuccess.CREATED).json(result);
});
exports.createCarAdImageController = createCarAdImageController;
