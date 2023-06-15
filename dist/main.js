"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorHandler_util_1 = require("../src/utils/errorHandler.util");
const carAds_routes_1 = __importDefault(require("./routes/CarAds/carAds.routes"));
const user_routes_1 = __importDefault(require("./routes/User/user.routes"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/users", user_routes_1.default);
exports.app.use("/cars", carAds_routes_1.default);
exports.app.use(errorHandler_util_1.errorHandlerUtil);
