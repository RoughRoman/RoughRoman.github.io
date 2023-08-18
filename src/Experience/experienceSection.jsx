import "./experienceSection.css";


export default function ExperienceSection(){
    return (
        <>  
            <h2>Experience</h2>
            <div>
                
                <ExperienceItem 
                    ExperienceProp ={{
                    title: "University of South Africa",
                    date: "2019-2022",
                    body: "This is a test piece of text for the body of an experience."}}
                />

            </div>
        </>
    );
}

function ExperienceItem({ExperienceProp}){
    return(
        <>
        <div className="ExperienceItem">
            <h3 className="ExperienceTitle">{ExperienceProp.title}</h3>
            <h4 className="ExperienceDateRange">{ExperienceProp.date}</h4>
            <p className="ExperienceBody">{ExperienceProp.body}</p>
        </div>
        </>
    )
}