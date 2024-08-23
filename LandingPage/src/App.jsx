import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'

function App() {

  return (
    <>
      <div className='m-0 p-0 bg-gray-300'>
        <Header />
        <Home />
        <About />
        <div>
          <Service />
        </div>
      </div>
    </>
  )
}

export default App
