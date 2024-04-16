"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.get = exports.create = void 0;
const userservice = __importStar(require("../services/user.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const zod_1 = require("zod");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const create = async (req, res, next) => {
    const user = req.body;
    console.log(req.body, ' is request body');
    const createdUser = await userservice.create(user);
    res.status(http_status_codes_1.default.CREATED).send(createdUser);
};
exports.create = create;
const get = async (req, res, next) => {
    try {
        const email = req.query.email;
        const user = await userservice.get(zod_1.string);
        res.status(http_status_codes_1.default.CREATED).send(user);
    }
    catch (error) {
        next(error);
    }
};
exports.get = get;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await userservice.login(email, password);
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.json(accessToken);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
//# sourceMappingURL=user.controller.js.map