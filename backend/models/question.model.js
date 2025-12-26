import mongoose from "mongoose";


const questionSchema = new mongoose.Schema(
  {
    questions:[{
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        answer: { type: String, required: true },
        explanation: { type: String, required: true },
    }],
    quizId : { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);