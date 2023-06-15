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
exports.deleteCarAdByIdService = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../../constants");
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const prisma = new client_1.PrismaClient();
const deleteCarAdByIdService = (userId, adId) => __awaiter(void 0, void 0, void 0, function* () {
    const ad = yield prisma.car.findUnique({
        where: {
            id: adId,
        },
    });
    if (!ad) {
        throw new errorHandler_util_1.AppError("Ad not found.", constants_1.statusError.BAD_REQUEST);
    }
    if (ad.ownerId !== userId) {
        throw new errorHandler_util_1.AppError("You do not have permission to delete this ad.", constants_1.statusError.FORBIDDEN);
    }
    yield prisma.car.delete({
        where: {
            id: adId,
        },
    });
});
exports.deleteCarAdByIdService = deleteCarAdByIdService;
