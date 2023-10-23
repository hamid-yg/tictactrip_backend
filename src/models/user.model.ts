import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    quota: {
        type: Number,
        required: true
    },
    lastRequest: {
        type: Date,
        required: true
    }
});

export default mongoose.model("User", userSchema);
