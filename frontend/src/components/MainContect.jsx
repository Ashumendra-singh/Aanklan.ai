import React from 'react'   
import { useState } from 'react';
import DifficultyBadge from './DificultyBadge.jsx';

// Mock data
const quizTopics = [
  { id: 'all', name: 'All Topics', icon: 'menu_book' },
    { id: 'wwii', name: 'World War II History', icon: 'menu_book' },
    { id: 'quantum', name: 'Introduction to Quantum Physics', icon: 'menu_book' },
    { id: 'javascript', name: 'Fundamentals of Javascript', icon: 'menu_book' },
    { id: 'renaissance', name: 'The Italian Renaissance', icon: 'menu_book' },
    { id: 'chemistry', name: 'Basics of Organic Chemistry', icon: 'menu_book' },
];
const quizHistory = [
    { id: 1, topic: 'Introduction to Quantum Physics', difficulty: 'Hard', questions: 20, date: 'Oct 26, 2023', color: 'red' },
    { id: 2, topic: 'Introduction to Quantum Physics', difficulty: 'Medium', questions: 15, date: 'Oct 12, 2023', color: 'yellow' },
    { id: 3, topic: 'Introduction to Quantum Physics', difficulty: 'Easy', questions: 10, date: 'Sep 30, 2023', color: 'green' },
];



const MainContent = ({ activeTopic }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const currentTopic = quizTopics.find(t => t.id === activeTopic) || quizTopics[2];

  return (
    <main className="flex-1 p-6 lg:p-10 overflow-auto">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight">Quiz History</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Showing quizzes for: <span className="font-semibold text-gray-800 dark:text-gray-200">{currentTopic.name}</span>
            </p>
          </div>
          <button className="flex items-center justify-center border-2 gap-2 h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 600"}}>add</span>
            <span>Create New Quiz</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="grow-0">
            <label className="flex flex-col h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full  dark:bg-background-dark border border-gray-300 dark:border-gray-700 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <div className="text-gray-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 px-2 text-base" 
                  placeholder="Search by quiz topic..."
                />
              </div>
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg  dark:bg-background-dark border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-4 transition-colors">
              <span className="material-symbols-outlined text-gray-500">filter_list</span>
              <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Difficulty</p>
              <span className="material-symbols-outlined text-gray-500">arrow_drop_down</span>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg  dark:bg-background-dark border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-4 transition-colors">
              <span className="material-symbols-outlined text-gray-500">sort</span>
              <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Sort by Date</p>
              <span className="material-symbols-outlined text-gray-500">arrow_drop_down</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Quiz Topic
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Questions
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date Created
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {quizHistory.map(quiz => (
                  <tr key={quiz.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {quiz.topic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <DifficultyBadge difficulty={quiz.difficulty} color={quiz.color} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {quiz.questions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {quiz.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                      <button className="text-primary hover:text-primary/80 transition-colors font-semibold">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 dark:bg-background-dark px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <button className="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                Previous
              </button>
              <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                </p>
              </div>
              <div>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                  <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button 
                    aria-current="page" 
                    className="relative z-10 inline-flex items-center bg-primary/10 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    1
                  </button>
                  <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default MainContent
