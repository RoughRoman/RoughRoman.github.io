import "./experienceSection.css";
import Section from "../../basic Components/section/section";
import CV from "../../docs/M.Lategan CV.pdf"


export default function ExperienceSection(){
    return (
        <>  
            <Section props={{
                heading: "Experience",
                subHeading: "",
                body:"Nothing commercial yet. We all have to start somewhere!"
            }}></Section>
            <a className= "CVlink" href={CV} download="M-Lategan-CV">Here's my CV.</a>
            

        </>
    );
}
