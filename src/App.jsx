import './App.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Projects />
      {/*
      <Skills />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
