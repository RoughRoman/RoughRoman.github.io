import React from 'react';
import emailIcon from '../../assets/icons/email.png';
import githubIcon from '../../assets/icons/github.png';
import instaIcon from '../../assets/icons/instagram.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import Section from '../../basic Components/section/section';

import './herobar.css';

export default function HeroBar(){
    return(
        <>
        <div className='heroBar'>
            <Section props = {{
                heading: "Matthew Lategan",
                subHeading: "Software Fanatic",
                body: "Tinkering with everything Computer Science. Occasionally, it works!"
                
            }} ></Section>
            <LinkIcons></LinkIcons>
        </div>
            
            
        </>
    )
}

function LinkIcons(){
    return(
        <>
        <div className="linkIcons">
            <a href="mailto:matthew.lategan26@gmail.com" target="_blank">
                <img className='link' src={emailIcon} alt="Email icon" />
            </a>
            <a href="https://github.com/RoughRoman" target="_blank">
                <img className='link' src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.instagram.com/man_of_a_suspicious_nature/" target="_blank">
                <img className='link' src={instaIcon} alt="Instagram Icon" />
            </a>
            <a href="https://www.linkedin.com/in/matthew-lategan-449921235/" target="_blank">
                <img className='link' src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </div>
        </>
    )
}



// https://www.flaticon.com/ remember to go here and get attributions for footer