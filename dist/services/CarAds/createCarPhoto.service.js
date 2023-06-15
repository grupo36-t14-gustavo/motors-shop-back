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
exports.createCarPhotoService = void 0;
const client_1 = require("@prisma/client");
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const prisma = new client_1.PrismaClient();
const createCarPhotoService = (photoData, carId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield prisma.car.findUnique({ where: { id: carId } });
        if (!car) {
            throw new errorHandler_util_1.AppError("car not found");
        }
        const newImageCar = yield prisma.carImage.create({
            data: Object.assign(Object.assign({}, photoData), { carId: car.id }),
        });
        return newImageCar;
    }
    catch (error) {
        console.log(error);
        throw new errorHandler_util_1.AppError("verify the fields");
    }
});
exports.createCarPhotoService = createCarPhotoService;
