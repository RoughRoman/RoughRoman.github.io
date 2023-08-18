import './footer.css'

export default function Footer(){
    return(
        <>
            <div className="footer">
                
                <div className="additionalInformation">
                <br />
                <a className="footerText" href="mailto:matthew.lategan26@gmail.com">matthew.lategan26@gmail.com</a>
                <br />
                <br />
                    <a className='footerText' href="https://www.linkedin.com/in/matthew-lategan-449921235/" target="_blank">Repo for this site</a>
                    <p className='footerText'>Created with React, built with Vite, hosted on Github.io</p>
                    
                </div>
                <div>
                <p className="footerText"> Icon Attributions :</p>
                    <ul>
                        <li><a className="footerText" href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a></li>
                        <li><a className="footerText" href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a></li>
                        <li><a className="footerText" href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Hight Quality Icons - Flaticon</a></li>
                        <li><a className="footerText" href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}