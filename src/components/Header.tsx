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
                <div className="right-nav">
                    <FontAwesomeIcon icon={faDownload} className="icon-download"/>
                    <a href="#resume">Resume</a>
                </div>
            </nav>
        </header>
    )
}

export default Header