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
exports.verifyTokenIsValid = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_util_1 = require("../../utils/errorHandler.util");
const client_1 = require("@prisma/client");
const constants_1 = require("../../constants");
const generateRandomSecretKey_util_1 = require("../../utils/generateRandomSecretKey.util");
const prisma = new client_1.PrismaClient();
const verifyTokenIsValid = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const secretKeyLength = 36;
    const access = 1;
    let token = req.headers.authorization;
    if (!token) {
        throw new errorHandler_util_1.AppError("Missing bearer token", constants_1.statusError.UNAUTHORIZED);
    }
    token = token.split(" ")[access];
    const secretKey = process.env.SECRET_KEY || (0, generateRandomSecretKey_util_1.generateSecretKeyUtil)(secretKeyLength);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
    jsonwebtoken_1.default.verify(token, secretKey, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            throw new errorHandler_util_1.AppError(error.message, constants_1.statusError.UNAUTHORIZED);
        }
        req.user = decoded;
        req.user = {
            id: decoded.sub,
            cars: yield prisma.car.findMany({
                where: {
                    ownerId: decoded.sub,
                },
            }),
        };
    }));
    return next();
});
exports.verifyTokenIsValid = verifyTokenIsValid;
