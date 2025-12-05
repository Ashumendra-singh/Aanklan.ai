import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { generateLoginToken, generateAndSetJWT } from "../utils/tokens.util.js";
import sendEmail from "../utils/sendEmail.js";
import AppError from "../utils/AppError.js";
import { sanitizeUser } from "../utils/sanitize.js";

export const registerUser = async (req, res) => {
    let { userName, email, password } = req.body;
    
    const user = await User.findOne({ email });
    console.log(user)

    if (user) {
        throw new AppError(400, "User Already Registered");
    }
    password = await bcrypt.hash(password, 10);
    const newUser = new User({
        userName,
        email,
        password,
    });
    await newUser.save();

    generateAndSetJWT(res, newUser);

    return res.status(200).json({
        success: true,
        message: "User registered successfully!",
        data: {
            user: sanitizeUser(newUser),
        },
    });
};

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
        success: false,
        message: "Please provide email and password"
        });
    }
    
    console.log(email);
    const user = await User.findOne({email});

    if (!user) {
        return res.status(401).json({
        success: flase,
        message: "email or password is wrong"
    }); 
    }
    const isPasswordValid = await user.comparePassword(password);
    if(isPasswordValid === false){
        return res.status(401).json({
        success: false,
        message: "email or password is wrong"
    }); 
    }
    generateAndSetJWT(res, user);

    return res.status(200).json({
        success: true,
        message: "User logged in successfully!",
        data: {
            user: sanitizeUser(user),
        },
    }); 
};

export const logoutUser = async (req, res) => {
    res.clearCookie("Aanklan.ai-token");

    return res.status(200).json({
        success: true,
        message: "User logged out succesfully.",
    });
};


export const getCurrentUser = async (req, res) => {
    const userId = req.user._id;
    return res.status(200).json({
        success: true,
        data: {
            user: sanitizeUser(req.user),
        },
    });
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError(404, "User with this email does not exist");
    }
    const resetToken = generateLoginToken();
    user.resetToken = resetToken.hash;
    user.tokenCreatedAt = Date.now();
    await user.save();
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken.token}&id=${user._id}`;

    await sendEmail(user.email, resetLink);
    return res.status(200).json({
        success: true,
        message: "Password reset link has been sent to your email.",
    });
}
export const resetPassword = async (req, res) => {
    const { userId, token, newPassword } = req.body;
    const user = await User.findById(userId);

    if (!user) {
        throw new AppError(404, "User not found");
    }   
    const { hash: tokenHash } = generateLoginToken(token);

    if (user.resetToken !== tokenHash) {
        throw new AppError(400, "Invalid or expired password reset token");
    }
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.tokenCreatedAt = undefined;
    await user.save();

    return res.status(200).json({
        success: true,
        message: "Password has been reset successfully.",
    });
}

