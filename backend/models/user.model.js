import mongoose from "mongoose";
import { hash, compare } from "bcrypt";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    resetToken:{
        type: String,
        default: null,
    },
    tokenCreatedAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await compare(candidatePassword, this.password);
} 

const User = mongoose.model("User", userSchema);
export default User;
