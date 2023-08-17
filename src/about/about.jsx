
import facePic from '../assets/images/facepic.jpg';
import './about.css'

export default function AboutSection(){
    return(
        <div className="aboutSection">
            <h2>About</h2>
            <div className="aboutBody">
                <p> I am a dedicated and passionate computer scientist, with a strong foundation in
                    problem-solving and a drive for innovative solutions. With a keen eye for detail and a
                    natural analytical mindset, I excel in tackling complex challenges. I embrace
                    continuous learning to ensure my skills remain relevant and adaptable.
                    Collaborative and effective in communication, I thrive in diverse teams,
                    bringing a valuable contribution to group dynamics. I am fuelled by curiosity and a
                    constant desire to improve, exploring emerging technologies and pushing the
                    boundaries of technological advancements.</p>
                <img className='Face' src={facePic} alt=""  />
            </div>
            
        </div>

    )
}