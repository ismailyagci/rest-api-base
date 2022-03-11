import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    visible: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Images', imagesSchema);