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
exports.getUserByIdService = void 0;
const client_1 = require("@prisma/client");
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const prisma = new client_1.PrismaClient();
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            address: true,
            comments: true,
            cars: true,
        },
    });
    if (!user) {
        throw new errorHandler_util_1.AppError("User not found");
    }
    return user;
});
exports.getUserByIdService = getUserByIdService;
