import { useState } from 'react'
import './App.css'
import HeroBar from './herobar/herobar.jsx'
import AboutSection from './about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroBar></HeroBar>
     <AboutSection></AboutSection>
    </>
  )
}

export default App
