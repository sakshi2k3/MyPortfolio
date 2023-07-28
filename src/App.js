import React from 'react'
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'

function App() {
  return (
    <>
   <Header/>
   

    { <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/projects' element={<Projects/>}/>
   

<Route path='/contact' element={< Contact/> }/>
    {/* <Route path='/about' element={<About/>} /> */}
    
   </Routes> }
    
   <Footer/>
    </>
  )
}

export default App
