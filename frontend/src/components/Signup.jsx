import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
const backend = import.meta.env.VITE_backend+'/api/v1/users/register';

const Signup = ({ onSwitchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const handleSignIn = (val) => {
      navigate('/signin');
  };


  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    const response = fetch(backend, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password }),
    });
    response.then(res => res.json()).then(data => {
      console.log('Login response data:', data);
      if(data.success){
        navigate('/quiz');
      }
    }).catch(error => {
      console.error('Login error:', error);
    });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-4xl rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Panel: Branding & Value Proposition */}
        <div className="hidden md:flex flex-col  gap-8 p-10 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className='h-8'/>
            <p className="text-xl font-bold text-gray-900 dark:text-white">Aanklan.ai</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight">
              Generate Engaging Quizzes with AI
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
              Instantly create, customize, and share quizzes on any topic. Sign up to get started.
            </p>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <img 
              className="w-full max-w-xs h-auto object-cover rounded-lg" 
              alt="Abstract illustration of interconnected nodes representing AI" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0jUMhXeVz3VskJx3P6pJTGHOd1oArF2-jwEmYcShOQx4QeQItiJLpzZxhnxf-SzSvHOXXpwMvIq_h-Gk_mqs3st8XNT2IMFVZ_xNJnqueJoFLHmw5zX6-_FBRNQfw8pxob5E4yl6ctUBBI0tCOaVBt7EY-dezm_a5d8fieqMk7BYyayPWw2yqg1_uHRA31rvu1-KwTrLbhx8yu3KSSFN_hknzZBI3QmxKmxXSvj57fyEVKEY9SkVOm2EPTNcsQp-OOBa8wgybB7WP"
            />
          </div>
        </div>

        {/* Right Panel: Signup Form */}
        <div className="flex flex-col justify-center p-10">
          <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
            <h1 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight text-left">
              Create Your Account
            </h1>
            
            <div className="flex flex-col gap-4">
              {/* Full Name Field */}
              <label className="flex flex-col w-full">
                <p className="text-gray-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-12 placeholder:text-gray-500 px-4 text-base font-normal leading-normal" 
                  placeholder="Enter your full name"
                />
              </label>

              {/* Email Field */}
              <label className="flex flex-col w-full">
                <p className="text-gray-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">
                  Email Address
                </p>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-12 placeholder:text-gray-500 px-4 text-base font-normal leading-normal" 
                  placeholder="Enter your email"
                />
              </label>

              {/* Password Field */}
              <label className="flex flex-col w-full">
                <p className="text-gray-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-12 placeholder:text-gray-500 px-4 pr-2 border-r-0 text-base font-normal leading-normal" 
                    placeholder="Create a password"
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 dark:text-gray-400 flex border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {showPassword ? (
                        <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></>
                      ) : (
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z"/>
                      )}
                    </svg>
                  </button>
                </div>
              </label>

              {/* Confirm Password Field */}
              <label className="flex flex-col w-full">
                <p className="text-gray-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-12 placeholder:text-gray-500 px-4 pr-2 border-r-0 text-base font-normal leading-normal" 
                    placeholder="Confirm your password"
                  />
                  <button 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 dark:text-gray-400 flex border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {showConfirmPassword ? (
                        <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></>
                      ) : (
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z"/>
                      )}
                    </svg>
                  </button>
                </div>
              </label>

              {/* Submit Button */}
              <div className="flex flex-col gap-4 mt-2">
                <button 
                  onClick={handleSignup}
                  className="flex items-center justify-center whitespace-nowrap h-12 px-6 rounded-lg w-full bg-blue-600 text-white text-base font-semibold transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Sign Up
                </button>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{' '}
                  <button 
                    onClick={handleSignIn}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;