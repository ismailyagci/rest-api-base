import mongoose from "mongoose";

const isValidId = (value) => {
    return mongoose.Types.ObjectId.isValid(value);
};

export default isValidId;