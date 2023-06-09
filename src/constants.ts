import * as dotenv from "dotenv";
import { generateSecretKeyUtil } from "./utils/generateRandomSecretKey.util";

dotenv.config();

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;

export const statusSuccess = {
    OK,
    CREATED,
    NO_CONTENT,
};

export const statusError = {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    CONFLICT,
    SERVER_ERROR,
};

const maxKeyLength = 36;
export const SECRET_KEY = process.env.SECRET_KEY || generateSecretKeyUtil(maxKeyLength);

export const BACKUP_PORT = 3000;
