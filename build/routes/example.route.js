"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleController_1 = __importDefault(require("../controllers/ExampleController"));
const helpers_1 = require("../helpers");
const validators_1 = require("../middlewares/validators");
const exampleRoutes = express_1.default.Router();
exampleRoutes.post("/example", validators_1.ValidateCreateExampleRequest, (0, helpers_1.catchAsync)(ExampleController_1.default.createExample));
exports.default = exampleRoutes;
