import { useState } from 'react';
import './App.css';
import HeroBar from './herobar/herobar.jsx';
import AboutSection from './about/about';
import EducationSection from './education/educationSection';
import Footer from './footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroBar></HeroBar>
     <AboutSection></AboutSection>
     <EducationSection></EducationSection>
     <Footer></Footer>

    </>
  )
}

export default App
