import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import TopicsSidebar from './Topicsidebar.jsx';
import MainContent from './MainContect.jsx';

// Mock data
const quizTopics = [
  { id: 'all', name: 'All Topics', icon: 'menu_book' }, 
    { id: 'wwii', name: 'World War II History', icon: 'menu_book' },
    { id: 'quantum', name: 'Introduction to Quantum Physics', icon: 'menu_book' },
    { id: 'javascript', name: 'Fundamentals of Javascript', icon: 'menu_book' },
    { id: 'renaissance', name: 'The Italian Renaissance', icon: 'menu_book' },
    { id: 'chemistry', name: 'Basics of Organic Chemistry', icon: 'menu_book' },
];





export default function QuizPage() {
  const [activeNav, setActiveNav] = useState('history');
  const [activeTopic, setActiveTopic] = useState('quantum');

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-gray-900 dark:text-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <div className="relative flex min-h-screen w-full">
        <Sidebar activeNav={activeNav} onNavClick={setActiveNav}  />
        <TopicsSidebar activeNav={activeNav} activeTopic={activeTopic} onTopicClick={setActiveTopic} quizTopics={quizTopics} />
        <MainContent activeTopic={activeTopic} />
      </div>
    </div>
  );
}
