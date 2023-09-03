import Section from '../../basic Components/section/section';
import Spacer from '../../basic Components/spacer';
import AcademicRecord from '../../docs/AcademicRecord.pdf';
import './education.css'
import '../../basic Components/section/section.css';



export default function EducationSection(){
    return(
        <>  
            <Spacer></Spacer>
            <div className='section'>
                <h1 className={'sectionHeader'}>Education/Certifications</h1>
            </div>
            
 
            <div className='section'>
                <h2 className='sectionSubHeading'>University of South Africa</h2>
                <p className='sectionBody'>Bachelor of Science in Computing</p>
                <p className='sectionBody'>2019-2022</p>
                <p className='sectionBody'>Graduated cum laude</p>
                <a className="recordLink" href={AcademicRecord} download="AcademicRecord-MLategan">Academic Record</a>
            </div>

            

            

        </>
    )
}



