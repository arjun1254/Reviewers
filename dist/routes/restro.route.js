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
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const restroController = __importStar(require("../controllers/restro.controller"));
const reviews_route_1 = __importDefault(require("./reviews.route"));
const Validate_1 = require("../utils/Validate");
const create_restro_validators_1 = require("../Validators/create-restro.validators");
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const router = (0, express_1.Router)();
router.use('/:id/reviews', reviews_route_1.default);
router.get('/', restroController.findAll);
router.post(`/`, (0, Validate_1.validate)(create_restro_validators_1.createRestaurantDto), authentication_middleware_1.authenticateToken, authentication_middleware_1.isAdmin, restroController.create);
router.delete(`/:id`, authentication_middleware_1.authenticateToken, authentication_middleware_1.isAdmin, restroController.deleteById);
router.patch(`/:id`, authentication_middleware_1.authenticateToken, authentication_middleware_1.isAdmin, restroController.updateByID);
router.get(`/:id`, restroController.findByID);
exports.default = router;
//# sourceMappingURL=restro.route.js.map