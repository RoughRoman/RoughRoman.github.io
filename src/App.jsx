import { useState } from 'react';
import './App.css';
import HeroBar from './herobar/herobar.jsx';
import AboutSection from './about/about';
import ExperienceSection from './Experience/experienceSection';
import Footer from './footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroBar></HeroBar>
     <AboutSection></AboutSection>
     <ExperienceSection></ExperienceSection>
     <Footer></Footer>

    </>
  )
}

export default App
