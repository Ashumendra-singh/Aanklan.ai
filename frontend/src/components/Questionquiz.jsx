// ...existing code...

import React, { useState } from "react";

const Questionquiz = ({ quizData }) => {
  const [responses, setResponses] = useState(() =>
    quizData.reduce((acc, _item, index) => {
      acc[index] = { selection: null, showExplanation: false };
      return acc;
    }, {})
  );

  const handleOptionSelect = (questionIndex, option) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: {
        selection: option,
        showExplanation:
          option === quizData[questionIndex].ans
            ? false
            : prev[questionIndex].showExplanation,
      },
    }));
  };

  const toggleExplanation = (questionIndex) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: {
        ...prev[questionIndex],
        showExplanation: !prev[questionIndex].showExplanation,
      },
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pt-8 pb-16 text-slate-900">
      <h1 className="text-center text-3xl font-semibold mb-7 text-blue-600">
        Quick React Quiz
      </h1>

      {quizData.map((item, index) => {
        const { selection, showExplanation } = responses[index];
        const correctAnswer = item.ans ?? item.answer;
        const questionStatus =
          selection && selection === correctAnswer
            ? "correct"
            : selection
            ? "incorrect"
            : null;
        const articleClass = [
          "border rounded-xl p-6 mb-5 shadow-xl transition-colors duration-200 text-slate-900",
          questionStatus === "correct"
            ? "border-green-500 bg-green-50"
            : "",
          questionStatus === "incorrect"
            ? "border-rose-400 bg-rose-50"
            : "",
          !questionStatus ? "bg-white border-slate-200" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <article
            key={item.id}
            className={articleClass}
          >
            <header className="mb-5">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-slate-500 mb-2">
                Question {index + 1}
              </span>
              <h2 className="text-xl leading-7 text-slate-900">{item.question}</h2>
            </header>

            <div className="grid gap-3 sm:grid-cols-2">
              {item.options.map((option) => {
                const isSelected = selection === option;
                const isCorrectOption = option === correctAnswer;
                const optionClass = [
                  "w-full border border-blue-200 bg-slate-50 text-slate-900 px-4 py-3 rounded-lg text-left flex justify-between items-center gap-3 transition-colors duration-200 cursor-pointer hover:border-blue-600 hover:bg-blue-50",
                  selection && isCorrectOption
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "",
                  isSelected && !isCorrectOption
                    ? "border-rose-400 bg-rose-50 text-rose-700"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={option}
                    type="button"
                    className={optionClass}
                    onClick={() => handleOptionSelect(index, option)}
                  >
                    <span>{option}</span>
                    {isSelected && isCorrectOption && (
                      <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-green-400 text-green-700">
                        Correct
                      </span>
                    )}
                    {isSelected && !isCorrectOption && (
                      <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-rose-200 text-rose-700">
                        Try again
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4">
              <button
                type="button"
                className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-blue-600 hover:text-white"
                onClick={() => toggleExplanation(index)}
              >
                {showExplanation ? "Hide explanation" : "Show explanation"}
              </button>
              {showExplanation && (
                <p className="mt-3 bg-slate-100 rounded-lg px-4 py-3 leading-relaxed text-slate-800">
                  {item.explanation}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Questionquiz;