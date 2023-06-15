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
exports.deleteUserByIdController = void 0;
const constants_1 = require("../../constants");
const deleteUserById_service_1 = require("../../services/User/deleteUserById.service");
const deleteUserByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = req.user.id;
    yield (0, deleteUserById_service_1.deleteUserByIdService)(idUser);
    return resp.status(constants_1.statusSuccess.NO_CONTENT);
});
exports.deleteUserByIdController = deleteUserByIdController;
