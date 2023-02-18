"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = exports.Logging = void 0;
const customLog_1 = __importDefault(require("./customLog"));
exports.Logging = customLog_1.default;
const catchAsync_1 = __importDefault(require("./catchAsync"));
exports.catchAsync = catchAsync_1.default;
