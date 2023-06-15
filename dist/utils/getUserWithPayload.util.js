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
exports.getUserWithPayloadUtil = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../constants");
const errorHandler_util_1 = require("../utils/errorHandler.util");
const prisma = new client_1.PrismaClient();
const getUserWithPayloadUtil = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existentUser = yield prisma.user.findUnique({
        where: {
            id: payload.sub || "",
        },
    });
    if (!existentUser) {
        throw new errorHandler_util_1.AppError("Provided Access Token is not valid", constants_1.statusError.UNAUTHORIZED);
    }
    return existentUser;
});
exports.getUserWithPayloadUtil = getUserWithPayloadUtil;
