import React from 'react'

function Quiz() {
  const optionStyle = { backgroundColor: '#113355', color: '#ffffff' };

  return (
    <div className='px-4 sm:px-8 min-h-[78vh] md:min-h-[78.5vh] relative text-white flex flex-col md:flex-row md:pl-56'>
      <div className='p-4 fixed top-16 left-0 hidden md:flex flex-col h-[78vh] md:min-h-[78.5vh] justify-between border-r border-gray-200 dark:border-gray-800 dark:bg-background-dark md:w-52 lg:w-60'>
        <div className='flex gap-4 flex-col'>
            <div className='flex gap-2'>
                <span className='material-symbols-outlined'>
                    add_circle
                </span>
                <h1>Create New Quiz</h1>
            </div>
            <div className='flex gap-2'>
                <span className='material-symbols-outlined'>
                    history
                </span>
                <h1>History</h1>
            </div>
        </div>
        <div className='flex'>
            <span className="material-symbols-outlined">logout</span>
            <h1>logOut</h1>
        </div>
      </div>
      <div className='flex-1 pt-16 pb-12 md:py-14'>
        <div className='w-full max-w-3xl mx-auto flex flex-col gap-50 md:gap-42 px-2 sm:px-4'>
            <div className='text-center md:text-left space-y-2'>
              <h1 className='text-3xl font-bold text-[#a19a9a]'>
                Create New Quiz
              </h1>
            </div>

            <div className='border-2 border-[#11335549] rounded-2xl w-full mx-auto p-5 sm:p-6 flex flex-col gap-6 bg-[#0b122033]/40 backdrop-blur'>
          

              <input type="text" className='w-full h-10 px-4 py-2 rounded-md bg-[#11335512] border-none focus:outline-none focus:ring-0 cursor-text text-white hover:shadow-sm hover:shadow-[#11335580] transition-shadow'  placeholder='Write your Topic Name'/>
              <div className='flex flex-col sm:flex-row gap-4 sm:items-end'>

                <div className='flex flex-row gap-3 w-full sm:flex-1 bg-transparent'>
                    <select className='custom-select px-4 py-2 border-2 w-full sm:flex-1 bg-transparent rounded-sm border-[#11335549] text-white focus:outline-none focus:ring-0 focus:border-transparent'>
                        <option value="Begginer" style={optionStyle}>Begginer</option>
                        <option value="Intermediate" style={optionStyle}>Intermediate</option>
                        <option value="Advanced" style={optionStyle}>Advanced</option>
                    </select>
                    <select className='w-full border-2 px-4 py-2 sm:flex-1 bg-transparent rounded-sm border-[#11335549] text-white focus:outline-none focus:ring-0 focus:border-transparent'>
                        <option value="English" style={optionStyle}>English</option>
                        <option value="Hinglish" style={optionStyle}>Hinglish</option>
                    </select>
                </div>
                <button className='bg-[#14175b] px-6 sm:px-10 hover:bg-[#0f1247] duration-2000 hover:scale-[101%] transform py-3 rounded-md w-full sm:w-auto sm:self-end md:self-center lg:self-end hover:bg-primary-dark transition-all'>
                   Create Quiz
                 </button>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
