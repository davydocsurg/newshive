import express from "express";
import ExampleController from "../controllers/AuthController";
import { catchAsync } from "../helpers";
import { ValidateCreateExampleRequest } from "../middlewares/validators";

const exampleRoutes = express.Router();

exampleRoutes.post(
    "/example",
    ValidateCreateExampleRequest,
    catchAsync(ExampleController.createExample)
);

export default exampleRoutes;
