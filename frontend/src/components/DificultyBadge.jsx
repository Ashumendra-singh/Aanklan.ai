import React from 'react'

const DifficultyBadge = ({ difficulty, color }) => {
  const colorClasses = {
    red: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300',
    green: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge