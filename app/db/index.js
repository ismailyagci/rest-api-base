import mongoose from "mongoose";

export const connectDB = async (url, cb) => {
    await mongoose.connect(url);
    cb();
};