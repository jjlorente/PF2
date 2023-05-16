import './App.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Main } from './components/Main/Main'
import { useState } from 'react'

function App() {
  const [len, setLen] = useState("en")

  const changeLen = (leng) => {
    console.log(leng)
    setLen(leng)
  };

  return (
    <>
      <Header changeLen={changeLen} len={len}/>
      <Main len={len}/>
      <About len={len}/>
      <Projects len={len}/>
      <Skills len={len}/>
      <Contact len={len}/>
      <Footer len={len}/>
    </>
  )
}

export default App
