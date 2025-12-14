import React from 'react'
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const handleSignIn = (val) => {
      navigate('/signin');
  };

  const handleSignUp = () => {
      navigate('/signup'  );
  };

  return (
     <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700 px-4 sm:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-4 cursor-pointer" onClick={()=> navigate('/')}  >
        <div className="size-6 text-primary" >
          <img src={logo} alt="" />
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Aanklan.ai</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex gap-2">
          <button 
            onClick={handleSignIn}
            className={`${currentPath == '/signin' && 'bg-gray-200 dark:bg-gray-700/50'} flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4   text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors`}
            
          >
            <span className="truncate">Sign In</span>
          </button>
          <button 
            onClick={handleSignUp}
            className={`${currentPath == '/signup' && 'bg-gray-200 dark:bg-gray-700/50'} flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4   text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors`}
          >
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar
