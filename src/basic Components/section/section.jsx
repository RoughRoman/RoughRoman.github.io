// lets try and unify the format of a section
// a section contains a main heading, a subheading and a body

import './section.css';


export default function Section({props}){
    let heading = props.heading;
    let subHeading = props.subHeading;
    let body = props.body;

    return(
        <div className="section">
            <h1 className="sectionHeader">{heading}</h1>
            <h2 className="sectionSubHeading">{subHeading}</h2>
            <p className="sectionBody">{body}</p>
        </div>
        
    );

}