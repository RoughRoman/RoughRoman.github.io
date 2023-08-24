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
    <div className='DualColumns'>
      <div className='HeroColumn'>
        <HeroBar></HeroBar>
        <AboutSection></AboutSection>
        </div>
      <div className='ExperienceColumn'>
        <ExperienceSection></ExperienceSection>
      </div>
      
    </div>
    <Footer></Footer>
     
     
    </>
  )
}

export default App
