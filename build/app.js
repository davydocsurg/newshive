"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
const example_route_1 = __importDefault(require("./routes/example.route"));
const app = (0, express_1.default)();
const allowlist = ["http://localhost:3000", process.env.FRONT_END_URL];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions);
};
app.use((0, cors_1.default)(corsOptionsDelegate));
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "You have reached Example api home page",
        success: true,
    });
});
app.use("/api", example_route_1.default);
app.use(middlewares_1.errorHandler);
exports.default = app;
