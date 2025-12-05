import React, { useState } from 'react';
import logo from '../assets/logo.png';

// Forgot Password Component
const ForgotPassword = ({ onReturnToLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    alert('Reset link sent to:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <header className="flex items-center justify-center gap-4">
            <div className="size-8 text-primary">
              <img src={logo} alt="logo" />
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Aanklan.ai</h2>
          </header>

          {/* Success Message */}
          <div className="flex w-full flex-col gap-8 rounded-xl bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
            <div className="flex flex-col gap-3 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500/20 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
              </div>
              <p className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">Check Your Email</p>
              <p className="text-gray-400 text-base font-normal leading-normal">
                We've sent password reset instructions to <span className="text-white font-medium">{email}</span>
              </p>
            </div>
            <button 
              onClick={onReturnToLogin}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark transition-colors duration-200"
            >
              <span className="truncate">Return to Login</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <header className="flex items-center justify-center gap-4">
          <div className="size-8 text-primary">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Aanklan.ai</h2>
        </header>

        {/* Form Card */}
        <div className="flex w-full flex-col gap-8 rounded-xl bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">Forgot Password?</p>
            <p className="text-gray-400 text-base font-normal leading-normal">
              No worries, we'll send you reset instructions. Enter the email address associated with your account.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <label className="flex flex-col w-full">
              <p className="text-white text-sm font-medium leading-normal pb-2">Email Address</p>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white placeholder:text-gray-500 focus:outline-0 border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary h-12 p-3 text-base font-normal leading-normal" 
                placeholder="you@example.com"
              />
            </label>

            <button 
              onClick={handleSubmit}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#135bec]  text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark transition-colors duration-200"
            >
              <span className="truncate hover:scale-110 transition-transform duration-200">Send Reset Link</span>
            </button>
          </div>
        </div>

        {/* Return to Login */}
        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Remember your password?{' '}
            <button 
              onClick={onReturnToLogin}
              className="font-medium hover:text-[#135bec] hover:underline"
            >
              Return to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;