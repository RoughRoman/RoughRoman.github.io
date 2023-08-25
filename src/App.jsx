import { useState } from 'react';
import './App.css';
import HeroBar from './herobar/herobar.jsx';
import AboutSection from './about/about';
import ExperienceSection from './Experience/experienceSection';
import Footer from './footer/footer';

import Section from './basic Components/section';

import {isMobile} from 'react-device-detect';

function App() {
  const [count, setCount] = useState(0)

  if (isMobile){
    return(
      <div className='MobileView'>
        <HeroBar></HeroBar>
        <AboutSection></AboutSection>
        <ExperienceSection></ExperienceSection>
        <Footer></Footer>
      </div>
    )

  }
  else{ // if desktop split into two columns
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
}

export default App
