import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type:Number,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true
    }
})

export const userModel = mongoose.model("users", userSchema);