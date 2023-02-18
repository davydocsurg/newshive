"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate_1 = __importDefault(require("./validate"));
const ValidateCreateExampleRequest = (req, res, next) => {
    return (0, validate_1.default)([
        (0, express_validator_1.check)("title")
            .exists({
            checkNull: true,
            checkFalsy: true,
        })
            .withMessage("Title is required")
            .isLength({ min: 5 })
            .withMessage("Title must be equal to or greater than 5 characters"),
        (0, express_validator_1.check)("description")
            .exists({
            checkNull: true,
            checkFalsy: true,
        })
            .withMessage("Description is required")
            .isLength({ min: 10 })
            .withMessage("Description must be equal to or greater than 10 characters"),
    ], req, res, next);
};
exports.default = ValidateCreateExampleRequest;
