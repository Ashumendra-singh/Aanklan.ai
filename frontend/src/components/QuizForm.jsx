import { useState } from 'react';
const backend = import.meta.env.VITE_backend+'/api/v1/quiz/generate';
import Questionquiz from './Questionquiz';



const QuizForm = () => {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [language, setLanguage] = useState('English');
  const [quizData, setQuizData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isQuizModalOpen, setQuizModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic to generate your quiz.');
      return;
    }

    setQuizModalOpen(false);
    setQuizData(null);
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(backend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ topic, level: difficulty, language }),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();

      if (data.success && Array.isArray(data.quiz)) {
        setQuizData(data.quiz);
        setQuizModalOpen(true);
        console.log('Generated Quiz Data:', data.quiz);
      } else {
        setQuizData(null);
        setError('We could not generate a quiz. Please try again.');
      }
    } catch (fetchError) {
      console.error('Quiz generation error:', fetchError);
      setQuizData(null);
      setError('Something went wrong while generating your quiz.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex-1 flex flex-col gap-6">
      {/* Page Heading */}
      <div className="flex flex-col gap-2 pt-2">
        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Create a New Quiz
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
          What do you want to learn today? Configure your quiz below.
        </p>
      </div>
        {quizData && isQuizModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setQuizModalOpen(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close quiz"
                className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                onClick={() => setQuizModalOpen(false)}
              >
                Close
              </button>
              <Questionquiz quizData={quizData} />
            </div>
          </div>
        )}
      {/* Main Form Card */}
      <div className="bg-[#1b1b66c0] dark:bg-[#1A2633] rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col gap-8">
        {/* Topic Input */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal" htmlFor="topic">
            Topic
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-2/3 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input
              autoFocus
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
              placeholder="e.g., Quantum Physics, 90s Pop Music, French History"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Difficulty Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal">
              Difficulty Level
            </label>
            <div className="flex h-14 w-full items-center rounded-lg bg-slate-100 dark:bg-slate-900/50 p-1.5 border border-slate-200 dark:border-slate-700">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <label key={level} className="cursor-pointer relative flex-1 h-full">
                  <input
                    type="radio"
                    name="difficulty"
                    value={level}
                    checked={difficulty === level}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className="flex h-full w-full items-center justify-center rounded-md text-sm font-semibold text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-[#37266aa9] dark:peer-checked:bg-primary peer-checked:text-primary dark:peer-checked:text-white peer-checked:shadow-sm">
                    {level}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex flex-col gap-2 ">
            <label className="text-slate-900 dark:text-slate-100 text-base  font-bold leading-normal" htmlFor="language">
              Language
            </label>
            <div className="relative ">
              <span className="absolute left-4 top-2/3 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </span>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full h-14 pl-12 pr-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base appearance-none cursor-pointer"
              >
                <option value="English">English (US)</option>
                <option value="Hinglish">Hinglish</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full h-14 bg-primary border-t border-blue-900 hover:bg-blue-900 active:bg-blue-700 disabled:bg-blue-400/70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            )}
            {isLoading ? 'Generating...' : 'Generate Quiz'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Tips Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/10 flex flex-col gap-2">
          <div className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Instant Feedback</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Get explanations immediately after answering.</p>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/10 flex flex-col gap-2">
          <div className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Review Later</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">All your generated quizzes are saved automatically.</p>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/10 flex flex-col gap-2">
          <div className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Share Results</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Challenge friends to beat your score.</p>
        </div>
      </div>

      {/* {quizData && (
        <div className=" border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/60 shadow-md">
          <Questionquiz quizData={quizData} />
        </div>
      )} */}
    </section>
  );
};

export default QuizForm;
