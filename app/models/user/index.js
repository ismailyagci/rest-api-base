import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageId: {
        type: String,
        required: false,
    },
    visible: {
        type: Boolean,
        required: true,
    },
    accessToken: String,
}, { timestamps: true, strict: false });

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

userSchema.virtual('profileImage', {
    ref: 'Images',
    localField: 'profileImageId',
    foreignField: '_id',
    match: { visible: true }
});

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

export default mongoose.model('Users', userSchema);