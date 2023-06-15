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
exports.createUserAdressController = void 0;
const constants_1 = require("../../constants");
const createUserAdress_service_1 = require("../../services/User/createUserAdress.service");
const createUserAdressController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const id = req.user.id;
    const createdNewUser = yield (0, createUserAdress_service_1.createUserAddressService)(userData, id);
    return resp.status(constants_1.statusSuccess.CREATED).json(createdNewUser);
});
exports.createUserAdressController = createUserAdressController;
