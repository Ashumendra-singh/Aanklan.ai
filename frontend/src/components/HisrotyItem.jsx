import { useState } from 'react';


const HistoryItem = ({ difficulty, difficultyColor, time, title, questions, language, score, status }) => {
  const difficultyColors = {
    Hard: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    Easy: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    Medium: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  };

  return (
    <div className="group bg-white dark:bg-[#1A2633] p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className={`px-2.5 py-0.5 rounded-full ${difficultyColors[difficulty]} text-xs font-bold uppercase tracking-wider`}>
          {difficulty}
        </div>
        <span className="text-slate-400 text-xs">{time}</span>
      </div>
      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          {questions} Qs
        </span>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          {language}
        </span>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
        {score ? (
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{score}</span>
        ) : (
          <span className="text-sm font-medium text-slate-400 italic">{status}</span>
        )}
        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
          {score ? 'Retake' : 'Start'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  const historyItems = [
    { difficulty: 'Hard', time: '2h ago', title: 'JavaScript Async/Await', questions: 10, language: 'EN', score: 'Score: 8/10' },
    { difficulty: 'Easy', time: 'Yesterday', title: 'French Vocabulary', questions: 15, language: 'FR', status: 'Not started' },
    { difficulty: 'Medium', time: '2 days ago', title: 'World Geography', questions: 20, language: 'EN', score: 'Score: 15/20' },
  ];

  return (
    <aside className="w-full lg:w-96 flex flex-col gap-6">
      <div className="flex items-center justify-between pt-2 px-1">
        <h2 className="text-slate-900 dark:text-white text-xl font-bold">Recent Generations</h2>
        <button className="text-primary text-sm font-medium hover:underline">View All</button>
      </div>

      <div className="flex flex-col gap-4">
        {historyItems.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>

      {/* Premium Promo */}
      <div className="mt-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white shadow-lg">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="size-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold">Go Premium</h3>
          <p className="text-blue-100 text-sm opacity-90">
            Generate unlimited quizzes and get detailed analytics on your progress.
          </p>
          <button className="mt-2 w-fit rounded-lg bg-[#13134fe2] px-4 py-2 text-sm font-bold text-primary shadow-sm hover:bg-blue-50 transition-colors">
            Upgrade Now
          </button>
        </div>
        <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-blue-400/20 blur-xl"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
