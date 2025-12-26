import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const ai = new GoogleGenAI({});


async function QuizGenerator(topic, level, language) {
    console.log("Generating quiz for:", topic, level, language);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:`I want to improve my learning. I will give you a topic and a difficulty level and we have 3 different difficulty levels: Beginner, Intermediate, and Advanced and i also give the language in which i want to learn, for example Hinglish: Hello kaise ho, Mujhe aap se ek doubt hai.
            Your task is to generate 50 multiple-choice question with 4 options, and provide the correct answer with explanation.
            The topic is ${topic} and the difficulty level is ${level} and the language is ${language}, if someone select language hindi dont use hindi text use english alphabates to write hindi words.
            Give the final output in the object format: {
              "question": "",
              "options": ["", "", "", ""],
              "answer": "",
              "explanation": ""
            }`,
    config: {
          systemInstruction:`You are a helpful assistant that helps people learn by generating quizzes.`,
          thinkingConfig: {
            thinkingBudget: 0, 
          },
        }
    });
    let data = response.text;
    data = data.substring(7, data.length - 3);
    console.log("Generated Quiz Data:", data);
    data = JSON.parse(data);
    return data;

}

export default QuizGenerator;
