import e from "express";
import mongoose from "mongoose";

const quiz = new mongoose.Schema(
    {
        topic : {
            type:String,
            required: true,


        },
        dificulty:{
            type: String,
            enum: ['Beginner', 'Intermediate', 'Advanced'],
            required: true,
        },
        userId : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { 
        timestamps: true
    }
)

export default mongoose.model("Quiz", quiz);