import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });


export default mongoose.model('Todos', todoSchema);