import '/src/assets/css/Header.css'
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <nav>
                <div className="left-nav">
                    <img src={logo} alt="Logo Antoine Portfolio" className="logo" />
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div
                    className="right-nav"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/public/CV2025.pdf';
                        link.download = 'Antoine_Simon_resume.pdf'; 
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} className="icon-download" />
                    <span>Resume</span>
                </div>
            </nav>
        </header>
    )
}

export default Header