import React from 'react'


const TopicsSidebar = ({activeNav, activeTopic, onTopicClick, quizTopics }) => {
  return (
    <>  
    {activeNav === 'history' ? ( 
    <aside className="flex h-[80vh] w-72 flex-col border-r border-gray-200 dark:border-gray-800 bg-background-light dark:bg-gray-900/40 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white px-2">Quiz Topics</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 px-2 mt-1">Select a topic to view quizzes.</p>
      </div>

      <nav className="flex flex-col gap-1.5 flex-1">
        {quizTopics.map(topic => (
          <button
            key={topic.id}
            onClick={() => onTopicClick(topic.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left w-full ${
              activeTopic === topic.id
                ? 'bg-primary/10 text-primary dark:text-primary'
                : 'text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <span 
              className="material-symbols-outlined text-gray-500" 
              style={activeTopic === topic.id ? {fontVariationSettings: "'FILL' 1, 'wght' 500"} : {}}
            >
              {topic.icon}
            </span>
            <p className="text-sm font-medium" style={activeTopic === topic.id ? {fontWeight: '700', fontSize: '1rem'} : {}}>{topic.name}</p>
          </button>
        ))}
      </nav>
    </aside>
     ) : <div></div>    }
    </>
  );
};

export default TopicsSidebar