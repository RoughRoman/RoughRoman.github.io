import './about.css'
import Section from '../../basic Components/section/section';

export default function AboutSection(){
   
    const birthDate = new Date('2000-06-26');
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(ageInYears);

    let aboutText = "Hi, I'm a "+age+"-year-old computer enthusiast residing in South Africa,"
                +" deeply passionate about computer science and technology. My interests "
                +" primarily revolve around software development, technology innovations,"
                +" and the ever-evolving world of digital solutions. I'm dedicated to continuous"
                +" learning and exploration in the field, seeking opportunities to expand my"
                +" knowledge and skills in this exciting realm. In summary, I just love cool computer magic."

    return(
        <> 
            <Section props = {{
                heading: "",
                subHeading: "About Me",
                body: aboutText
            }}></Section>
        </>   
    )
}
    
