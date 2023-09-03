import { useState } from 'react';
import './App.css';
import HeroBar from './specialComponents/herobar/herobar.jsx';
import AboutSection from './specialComponents/about/about';
import ExperienceSection from './specialComponents/Experience/experienceSection';
import Footer from './specialComponents/footer/footer';
import Projects from './specialComponents/projects/projects';
import Education from './specialComponents/education/education';



import {isMobile} from 'react-device-detect';

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
          <Education></Education>
          <Projects></Projects>
        </div>
        
      </div>
      <Footer></Footer>
      </>
    )

}

export default App
