import React from 'react'
import NavBar from './components/Navbar'
import MyName from './components/MyName'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='sections'>
        <MyName />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App