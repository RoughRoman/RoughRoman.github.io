import "./experienceSection.css";


export default function ExperienceSection(){
    return (
        <>  
            <h2>Experience</h2>
            <div>
                

            </div>
        </>
    )
}

function ExperienceItem(titleString, dateString, bodyString){
    return(
        <>
        <div className="ExperienceItem">
            <h3 className="ExperienceTitle">{titleString}</h3>
            <h4 className="ExperienceDateRange">2019 - 2022</h4>
            <p className="ExperienceBody">Bachelors of science in computing. </p>
        </div>
        </>
    )
}