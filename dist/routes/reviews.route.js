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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const reviewsController = __importStar(require("../controllers/reviews.controller"));
const Validate_1 = require("../utils/Validate");
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const create_review_validator_1 = require("../Validators/create-review.validator");
const router = (0, express_1.Router)({ mergeParams: true });
// router.get('/', authenticateToken, reviewsController.findAll)
router.post(`/`, (0, Validate_1.validate)(create_review_validator_1.createReviewDto), authentication_middleware_1.authenticateToken, reviewsController.create);
// router.delete(`/:id`, authenticateToken, isAdmin, reviewsController.deleteById)
// router.patch(`/:id`, authenticateToken, isAdmin, reviewsController.updateByID)
// router.get(`/:id`, authenticateToken, isAdmin, reviewsController.findByID)
exports.default = router;
//# sourceMappingURL=reviews.route.js.map