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
const helpers_1 = require("../helpers");
const models_1 = require("../models");
class ExampleController {
    constructor() {
        this.createExample = this.createExample.bind(this);
    }
    createExample(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let example = yield models_1.Example.create({
                    title: req.body.title,
                    description: req.body.description,
                });
                res.status(200).json({
                    success: true,
                    results: 1,
                    data: {
                        example,
                    },
                });
            }
            catch (err) {
                helpers_1.Logging.error(err);
            }
        });
    }
}
exports.default = new ExampleController();
