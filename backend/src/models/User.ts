import mongoose, { Schema } from "mongoose";
import validator from "validator";
import slugify from "slugify";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const UserSchema: Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Name is required"],
            minlength: 3,
        },
        email: {
            type: String,
            required: [true, "Email must be provided"],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, "Please provide a valid email."],
        },
        type: {
            type: String,
            enum: {
                values: ["admin", "vendor"],
                message:
                    "{VALUE} is not supported. Accepted values are: admin and vendor",
            },
            required: [true, "User type cannot be empty"],
        },
        verificationStatus: {
            type: String,
            default: "unverified",
        },
        authToken: {
            type: String,
            trim: true,
        },
        slug: {
            type: String,
            trim: true,
        },
        resetTokenExpiration: {
            type: Date,
            trim: true,
        },
        active: {
            type: Boolean,
            default: true,
            select: false,
        },
        password: {
            type: String,
            trim: false,
            required: [true, "Password must be provided"],
            minlength: 8,
        },
        passwordConfirmation: {
            type: String,
            required: [true, "Please confirm your password"],
            select: false,
            validate: {
                validator: function (el: string) {
                    return el === this.password;
                },
                message: "Passwords don't match",
            },
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        emailVerfiedAt: Date,
        emailVerifyToken: String,
        passwordResetExpires: Date,
        role: {
            type: String,
            enum: {
                values: ["admin", "vendor"],
                message: "{VALUE} is not supported",
            },
            default: "vendor",
        },
        photo: {
            type: String,
            default: "users/default.png",
        },
        stocks: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Stock",
        },
        cart: {
            items: [
                {
                    stock: {
                        type: Object,
                        required: true,
                    },
                    stockId: {
                        type: Schema.Types.ObjectId,
                        ref: "User",
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
