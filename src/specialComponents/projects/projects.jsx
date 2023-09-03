import Section from '../../basic Components/section/section';
import Spacer from '../../basic Components/spacer';
import '../../basic Components/section/section.css';



export default function Projects(){
    let bodyString = "Having a background in C++ and desktop/systems development"
    + " I decided to expand my horizons and try front end web development. "
    + " It is a very strange world compared to the surgical precision of bits,"
    + " pointers, and static types. But no great computer scientist has ever advocated "
    + " for stagnation and isolation. "

    return(
        <>  
            <Spacer></Spacer>
            <div className='section'>
                <h1 className='sectionHeader'>Projects</h1>
                <h2 className='sectionSubHeading'>This very website </h2>
                <p className='sectionBody'>{bodyString}</p>
                <br />
                <p className='sectionBody'>I think the video below sums it up well.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-QxI-RP6-HM?si=i5xNteu2-1DaMWWQ&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br />
                <a className='sectionBody' href="https://github.com/RoughRoman/RoughRoman.github.io" target="_blank">Here is the repository</a>
            </div>
            

            
        </>
    )
}