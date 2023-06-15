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
exports.deleteAdByAdIdController = void 0;
const deleteCarAdById_service_1 = require("../../services/CarAds/deleteCarAdById.service");
const constants_1 = require("../../constants");
const deleteAdByAdIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const carId = req.params.carId;
    yield (0, deleteCarAdById_service_1.deleteCarAdByIdService)(userId, carId);
    res.status(constants_1.statusSuccess.NO_CONTENT);
});
exports.deleteAdByAdIdController = deleteAdByAdIdController;
