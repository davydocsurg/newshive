import mongoose, { Schema } from "mongoose";

const NewsSchema: Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: [true, "Title is required"],
            minlength: 3,
        },
        description: {
            type: String,
            trim: true,
            required: [true, "Description is required"],
            minlength: 3,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("News", NewsSchema);
