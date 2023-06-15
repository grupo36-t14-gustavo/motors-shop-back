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
exports.createUserAddressService = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../../constants");
const userAddress_schema_1 = require("../../schemas/User/userAddress.schema");
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const prisma = new client_1.PrismaClient();
const createUserAddressService = (addressData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAddress = yield prisma.address.create({
            data: Object.assign(Object.assign({}, addressData), { userId: userId }),
        });
        const parseUser = userAddress_schema_1.createdAdress.parse(newAddress);
        return parseUser;
    }
    catch (error) {
        throw new errorHandler_util_1.AppError("check the fields", constants_1.statusError.BAD_REQUEST);
    }
});
exports.createUserAddressService = createUserAddressService;
