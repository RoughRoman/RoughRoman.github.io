import React from 'react';
import emailIcon from '../assets/icons/email.png';
import githubIcon from '../assets/icons/github.png';
import instaIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';

import './herobar.css';

export default function HeroBar(){
    return(
        <>
        <div className='heroBar'>
            <h1>Matthew Lategan</h1>
            <h2>Software Fanatic</h2>
            <p>Tinkering with everything Computer Science. <br></br>Occasionally, it works!</p>
            <LinkIcons></LinkIcons>
        </div>
            
            
        </>
    )
}

function LinkIcons(){
    return(
        <>
        <div className="linkIcons">
            <a href="mailto:someone@example.com" target="_blank">
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