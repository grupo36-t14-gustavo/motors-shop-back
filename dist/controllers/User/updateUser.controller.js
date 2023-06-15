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
exports.updateUserController = void 0;
const constants_1 = require("../../constants");
const updateUser_service_1 = require("../../services/User/updateUser.service");
const getPayload_util_1 = require("../../utils/getPayload.util");
const getUserWithPayload_util_1 = require("../../utils/getUserWithPayload.util");
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = req.body;
    const payload = (0, getPayload_util_1.getPayloadUtil)(req);
    const user = yield (0, getUserWithPayload_util_1.getUserWithPayloadUtil)(payload);
    if (user) {
        const updatedUser = yield (0, updateUser_service_1.updateUserService)(user.id, updateData);
        return res.status(constants_1.statusSuccess.OK).json(updatedUser);
    }
});
exports.updateUserController = updateUserController;
