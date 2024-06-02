import Typewriter from '../Typewriter/Typewriter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Navbar from '../components/Navbar';
import { SiGmail } from "react-icons/si";

function Home(){
    return(
        <div className={'home-container flex gap-5 flex-col'}>
            <h1 className=' font-semibold text-6xl' >Paawanjot Kaur</h1>
            <Typewriter
                text={[
                    "Coder", "Student","AI Enthusiast",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                duration={1000}
            />
            <Navbar />
            <div className='socials flex gap-5'>
                <a href="https://github.com/paawanjotk"> <FontAwesomeIcon icon={faGithub} /> </a>
                <a href="https://www.linkedin.com/in/paawanjot-kaur-40b284259/"> <FontAwesomeIcon icon={faLinkedin}/> </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=paawanjotkaur05@example.com" className=' mt-2' target='_blank'><SiGmail /> </a>
            </div>
    
        </div>
    );
}
export default Home;