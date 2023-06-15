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
exports.createCarAdService = void 0;
const client_1 = require("@prisma/client");
const carAd_schema_1 = require("../../schemas/CarAds/carAd.schema");
const prisma = new client_1.PrismaClient();
const createCarAdService = (carData, ownerId) => __awaiter(void 0, void 0, void 0, function* () {
    const newAdsCar = yield prisma.car.create({
        data: Object.assign(Object.assign({}, carData), { ownerId: ownerId }),
    });
    const parseData = carAd_schema_1.returnCreatAds.parse(newAdsCar);
    const newAds = Object.assign(Object.assign({}, parseData), { ownerId: ownerId });
    return newAds;
});
exports.createCarAdService = createCarAdService;
