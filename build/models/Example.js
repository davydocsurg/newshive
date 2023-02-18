"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ExampleSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "The title field is required"],
        minlength: [
            5,
            "Title is shorter than the minimum allowed length (5)",
        ],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [
            10,
            "Description is shorter than the minimum allowed length (10)",
        ],
    },
}, {
    timestamps: true,
});
const Example = mongoose_1.default.model("Example", ExampleSchema);
exports.default = Example;
