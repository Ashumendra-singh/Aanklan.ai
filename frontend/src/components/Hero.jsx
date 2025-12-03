import React from 'react';



const Hero = ({ onGetStarted }) => {
  return (
    <div className="w-full max-w-[960px] mx-auto">
      <div className="@container">
        <div className="flex flex-col gap-8 px-4 py-16 text-center @[864px]:flex-row @[864px]:text-left @[864px]:gap-12">
          <div className="flex flex-col gap-6 @[864px]:justify-center @[864px]:w-1/2">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Create Engaging Quizzes in Seconds with AI
              </h1>
              <h2 className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal @[480px]:text-lg">
                Save time and effort by letting our AI generate custom quizzes on any topic, at any difficulty.
              </h2>
            </div>
            <button 
              onClick={onGetStarted}
              className="flex self-center @[864px]:self-start min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              <span className="truncate">Get Started for Free</span>
            </button>
          </div>
          <div 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[864px]:w-1/2 shadow-2xl" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe13pbBH1Rg6h_omL44BF89MmTKsQlwoHT2gaBpfaZ8j9WUis7DT1oYg3_R4DXnLazS5sIt7AG-2GCuMIzTtMt7-U_SO5M9S0Y4NACcH6Tez_MO4E6S68lKtft5H8Egj415Q5awYSMKT92IY16UzpqSr1O5f6RH_k6KrRB4JRzLd0d7wZwloaZ4XLYXE0oYe8cG-yWR2knZhRruQ6Q7MZbst34Ji7J0NXxXRl5HJZPtCsaax8XQShN7NicdYXPl36xTblshQmhbzBz')" }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 py-16 @container">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:tracking-[-0.033em] max-w-3xl mx-auto">
            Why Choose Aanklan.ai?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-3xl mx-auto">
            Explore the powerful features that make quiz creation seamless and intelligent.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0 ">
          <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-primary dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Instant Quiz Generation</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Our AI generates relevant questions and answers in seconds.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-primary dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Customize Your Topics</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Input any subject or text to create a perfectly tailored quiz.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-primary dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-3xl">tune</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Adjustable Difficulty</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Choose from easy, medium, or hard difficulty levels.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-primary dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Multiple Question Formats</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Get a variety of question types, including multiple-choice.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 py-16">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center sm:text-[32px]">
          How It Works in 3 Simple Steps
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-4">
          <div className="flex flex-col gap-3 text-center items-center pb-3">
            <div className="flex items-center justify-center size-24 bg-[#11244a] dark:bg-primary-light rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">subject</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">1. Define Your Subject</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Enter any topic, paste text, or upload a document.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center items-center pb-3">
            <div className="flex items-center justify-center size-24 bg-[#11244a] dark:bg-primary/20 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">settings</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">2. Set Your Preferences</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Select the desired difficulty and number of questions.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center items-center pb-3">
            <div className="flex items-center justify-center size-24 bg-[#11244a] dark:bg-primary/20 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">share</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">3. Launch & Share</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Generate your quiz instantly and share it with your audience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 dark:bg-primary/20 rounded-xl my-16 mx-4">
        <div className="flex flex-col gap-6 items-center text-center p-8 md:p-12">
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] max-w-xl">
            Ready to Revolutionize Your Quizzes?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg">
            Join thousands of educators and creators who are saving time and creating more engaging learning experiences.
          </p>
          <button 
            onClick={onGetStarted}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            <span className="truncate">Create Your First Quiz Free</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
