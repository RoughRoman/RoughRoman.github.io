import Section from '../../basic Components/section/section';
import Spacer from '../../basic Components/spacer';
import AcademicRecord from '../../docs/AcademicRecord.pdf';



export default function EducationSection(){
    return(
        <>  
            <Spacer></Spacer>
            <Section props={{
                heading:"Education",
                subHeading: "",
                body:""
            }}>
            </Section>

            <div className='educationItem'>
                <h2>University of South Africa</h2>
                <p> Bachelor of Science in Computing</p>
                <a href={AcademicRecord} download="AcademicRecord-MLategan">Academic Record</a>
            </div>

            

        </>
    )
}



