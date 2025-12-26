import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.router.js";
import dbconnect from "./utils/dbconnect.js";
import quizRouter from "./router/quiz.router.js";

dotenv.config();

const app = express();
dbconnect();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/users", userRouter);
app.use("/api/v1/quiz", quizRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
