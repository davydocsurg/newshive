import { NextFunction, Request, Response } from "express";
import { checkUser, Logging } from "../helpers";
import { User } from "../models";

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
}

export default new AuthController();
