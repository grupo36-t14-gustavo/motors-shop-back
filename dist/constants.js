"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKUP_PORT = exports.statusError = exports.statusSuccess = void 0;
const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;
exports.statusSuccess = {
    OK,
    CREATED,
    NO_CONTENT,
};
exports.statusError = {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    CONFLICT,
    SERVER_ERROR,
};
exports.BACKUP_PORT = 3000;
