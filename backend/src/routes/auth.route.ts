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

export default authRoutes;
