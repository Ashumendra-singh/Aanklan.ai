import QuizGenerator from "../utils/QuizGenerator.js";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import Quiz from "../models/quiz.model.js";
import Question from "../models/question.model.js";

export async function generateQuiz(req, res) {
    let { topic, level, language } = req.body;
    console.log(topic, level, language);
    if(!topic || !level || !language){
        return res.status(400).json({success:false, message:"Topic, level and language are required"});
    }

    let user = req.user;

    console.log(user);
    let quiz = await Quiz.findOne({topic:topic, dificulty:level, userId:user._id});
    if(!quiz){
        quiz = new Quiz({
            topic:topic,
            dificulty:level,
            userId:user._id
        });
        await quiz.save();
        console.log("New quiz created:", quiz);
    }

    console.log("Quiz ID:", quiz);

    const quizData = await QuizGenerator(topic, level, language);

    let questions = quizData.map(q => ({
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation
    }));
    const questionDoc = new Question({
        questions: questions,
        quizId: quiz._id
    });
    const jhk = await questionDoc.save();

    console.log(jhk);


    res.status(200).json({ success: true, quiz: quizData });
}