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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginService = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const constants_1 = require("../../constants");
const generateRandomSecretKey_util_1 = require("../../utils/generateRandomSecretKey.util");
const prisma = new client_1.PrismaClient();
const userLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const secretKeyLength = 36;
    const user = yield prisma.user.findUnique({
        where: {
            email: loginData.email,
        },
    });
    if (!user) {
        throw new errorHandler_util_1.AppError("Ivalid credentials", constants_1.statusError.UNAUTHORIZED);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(loginData.password, user.password);
    if (!passwordMatch) {
        throw new errorHandler_util_1.AppError("Invalid credentials", constants_1.statusError.UNAUTHORIZED);
    }
    const secretKey = process.env.SECRET_KEY || (0, generateRandomSecretKey_util_1.generateSecretKeyUtil)(secretKeyLength);
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
    }, secretKey, {
        expiresIn: process.env.EXPIRES_IN,
        subject: String(user.id),
    });
    return token;
});
exports.userLoginService = userLoginService;
