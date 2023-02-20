import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { cookieOptions, JWT_SECRET } from "../commons";
import { AppError, checkUser, Logging } from "../helpers";
import { User } from "../models";

// types
import type { AuthRequest } from "../types";

const signToken = (id: string, type: string) => {
    const jwt_key: string = JWT_SECRET;
    const token = jwt.sign({ id, type }, jwt_key, { expiresIn: "1d" });
    return token;
};

const createSendToken = (
    user: any,
    statusCode: number = 200,
    res: Response
) => {
    const token = signToken(user._id, user.type);
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
    res.cookie("jwt", token, cookieOptions);
    res.status(statusCode).json({
        success: true,
        token,
        user,
    });
};

class AuthController {
    constructor() {
        this.register = this.register.bind(this);
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const passwordConfirmation = req.body.passwordConfirmation;

            const userExists = await checkUser(email, res, next);
            if (userExists) {
                return res.status(409).json({
                    success: false,
                    message: "User Already Exist. Please Login",
                });
            }
            // const hashedPwd = await bcrypt.hash(password, 12);

            const user = await User.create({
                name: name,
                email: email,
                password: password,
                passwordConfirmation: passwordConfirmation,
                type: "vendor",
                verificationStatus: "unverfied",
                saves: { items: [] },
            });

            await user.save({ validateBeforeSave: false });

            return res.status(200).json({
                success: true,
                message: "Registration successful",
                data: null,
            });
        } catch (error) {
            Logging.error(error);
            return res.json({
                success: false,
                errors: { error },
            });
        }
    }

    async login(req: AuthRequest, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.checkPassword(password, user.password))) {
            let errors = {
                email: "Email or password is incorrect",
            };
            return next(new AppError("Incorrect credentials", 422, errors));
        }
        user.password = undefined;
        req.user = user;
        createSendToken(user, 200, res);
    }
}

export default new AuthController();
