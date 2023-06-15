"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecretKeyUtil = exports.validateSecretKey = exports.generateRandomKey = void 0;
const generateRandomKey = (length) => {
    const carater = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    while (key.length < length) {
        const index = Math.floor(Math.random() * carater.length);
        key += carater.charAt(index);
    }
    return key;
};
exports.generateRandomKey = generateRandomKey;
const validateSecretKey = (key) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(key);
};
exports.validateSecretKey = validateSecretKey;
const generateSecretKeyUtil = (length) => {
    let key = (0, exports.generateRandomKey)(length);
    while (!(0, exports.validateSecretKey)(key)) {
        key = (0, exports.generateRandomKey)(length);
    }
    return key;
};
exports.generateSecretKeyUtil = generateSecretKeyUtil;
