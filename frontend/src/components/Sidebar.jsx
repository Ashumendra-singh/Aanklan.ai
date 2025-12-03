import React, { useState } from 'react';

// Mock data
// const quizTopics = [
//   { id: 'all', name: 'All Topics', icon: 'menu_book' },
//   { id: 'wwii', name: 'World War II History', icon: 'menu_book' },
//   { id: 'quantum', name: 'Introduction to Quantum Physics', icon: 'menu_book' },
//   { id: 'javascript', name: 'Fundamentals of Javascript', icon: 'menu_book' },
//   { id: 'renaissance', name: 'The Italian Renaissance', icon: 'menu_book' },
//   { id: 'chemistry', name: 'Basics of Organic Chemistry', icon: 'menu_book' },
// ];

// const quizHistory = [
//   { id: 1, topic: 'Introduction to Quantum Physics', difficulty: 'Hard', questions: 20, date: 'Oct 26, 2023', color: 'red' },
//   { id: 2, topic: 'Introduction to Quantum Physics', difficulty: 'Medium', questions: 15, date: 'Oct 12, 2023', color: 'yellow' },
//   { id: 3, topic: 'Introduction to Quantum Physics', difficulty: 'Easy', questions: 10, date: 'Sep 30, 2023', color: 'green' },
// ];

// Sidebar Component
const Sidebar = ({ activeNav, onNavClick }) => {
  const navItems = [
    { id: 'new-quiz', label: 'New Quiz', icon: 'add_circle' },
    { id: 'history', label: 'History', icon: 'history' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 dark:border-gray-800  dark:bg-background-dark p-4">
      <div className="flex items-center gap-3 mb-8">
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj5-trjq8aSp7XoGWq7JyBWS-LI8GT6fvS8uW2gGLoHh1luZwESRWs4-RBtd03qxcM3ww-H0-TLP44og0e0iOKRXkNjYA6bNjhKqyqWS7uUBJZSJwoP-i8ukFZjykZ1bYG3QI6FgnkY6lPzYSXOv4P3KXp-AgBkBTZ-LmETOJL3Vkq4UYmcYQSAqW90xr92IjySZizplAT4TxaKI2m94LjxeSxUcmUBuCizJ5mnzXY4uzObN9AzO7dGk0_g-SIe5iI1Cr3uKeYfyci')"}}
          role="img"
          aria-label="AI QuizGen logo"
        />
        <div className="flex flex-col">
          <h1 className="text-gray-900 dark:text-white text-base font-bold">AI QuizGen</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome Back!</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left w-full ${
              activeNav === item.id
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined" style={activeNav === item.id ? {fontVariationSettings: "'FILL' 1, 'wght' 500"} : {}}>
              {item.icon}
            </span>
            <p className="text-sm font-medium">{item.label}</p>
          </button>
        ))}
      </nav>

      <div className="flex flex-col">
        <button className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors text-left w-full">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Logout</p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;