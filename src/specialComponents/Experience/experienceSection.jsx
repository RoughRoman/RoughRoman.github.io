import "./experienceSection.css";


export default function ExperienceSection(){
    return (
        <>  
            
            <div className=" ExperienceSection">
            <h2>Experience</h2>
                
                <ExperienceItem 
                    ExperienceProp ={{
                    title: "University of South Africa",
                    date: "2019-2022",
                    body: "Degree focused on the core principles of computing "
                    +     "ranging from algorithms/datastructures, databases, "
                    +     "and software engineering to formal logic, artificial "
                    +     "intelligence, and theoretical computer science.",
                    skills: ["C++","Python", "Qt","NumPy", "Oracle 12c"],
                    additonalInfo: "Final Average: 75%"}}
                />

                <ExperienceItem 
                    ExperienceProp ={{
                    title: "Test Title",
                    date: "Test date",
                    body: "lorem ipsum something something. PLACEHOLDER TEXT",
                    skills: ["Skill 1","Skill 2", "Skill 3","Skill 4", "Skill 5"],
                    additonalInfo: ">:]"}}
                />

            </div>
        </>
    );
}

function SkillPill({label}){
    return(
        <>
            <div className="SkillPill">
                <p className="SkillLabel">{label}</p>
            </div>
        </>
    )
}

function ExperienceItem({ExperienceProp}){
    return(
        <>
        <div className="ExperienceItem">
            <h3 className="ExperienceTitle">{ExperienceProp.title}</h3>
            <h4 className="ExperienceDateRange">{ExperienceProp.date}</h4>
            <p className="ExperienceBody">{ExperienceProp.body}</p>
            <div className="SkillPillContainer">
                {ExperienceProp.skills.map((label) =>
                    <SkillPill label= {label}/>
                )}
            </div>
            
        </div>
        </>
    )
}