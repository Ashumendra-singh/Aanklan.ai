import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import QuizPage from './components/QuizPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <div className='bg-[#101622]'>
      <BrowserRouter>
        <Navbar />
        <Routes>  
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
