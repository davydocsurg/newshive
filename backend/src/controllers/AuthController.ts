import { NextFunction, Request, Response } from "express";
import { Logging } from "../helpers";
import { User } from "../models";

class AuthController {
    constructor() {
        this.register = this.register.bind(this);
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            let example = await User.create({
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
        } catch (err) {
            Logging.error(err);
        }
    }
}

export default new AuthController();
