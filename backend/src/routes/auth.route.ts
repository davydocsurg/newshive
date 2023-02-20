import express from "express";
import AuthController from "../controllers/AuthController";
import { catchAsync } from "../helpers";
import { ValidateRegistrationRequest } from "../middlewares/validators";

const authRoutes = express.Router();

authRoutes.post(
    "/register",
    ValidateRegistrationRequest,
    catchAsync(AuthController.register)
);
authRoutes.post("/login", catchAsync(AuthController.login));

export default authRoutes;
