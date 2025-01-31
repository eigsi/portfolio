import '/src/assets/css/Header.css'
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Header() {

    useEffect(() => {
        let mm = gsap.matchMedia();
        // Navigation links SCROLL animation
        const links = document.querySelectorAll('.left-nav a');
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                const target = targetId ? document.getElementById(targetId) : null;

                if (target) {
                    let offset = 0;
                    if (targetId === 'about') {
                        offset = -300;
                    } else if (targetId === 'skills') {
                        offset = 330;
                    } else if (targetId === 'projects') {
                        offset = 200;
                    }
                    // breakpoints
                    if (targetId === 'contact') {
                        mm.add("(max-width: 1024px)", () => {
                            offset = 120;
                        });
                        mm.add("(min-width: 1025px)", () => {
                            offset = 170; 
                        });
                    }
                    gsap.to(window, {
                        scrollTo: target.offsetTop - offset,
                        duration: 1,
                        ease: 'power2.out',
                    });
                }
            });
        });

        // Nettoie les gestionnaires d'événements pour éviter les fuites de mémoire
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', () => { });
            });
        };
    }, []);

    const scrollToTop = () => {
        gsap.to(window, {
            scrollTo: 0, // Remonte tout en haut
            duration: 1,
            ease: 'power2.inOut',
        });
    };

    return (
        <header>
            <nav>
                <div className="left-nav">
                    <img
                        src={logo}
                        alt="Logo Antoine Portfolio"
                        className="logo"
                        onClick={scrollToTop}
                        style={{ cursor: 'pointer' }}
                    />
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
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