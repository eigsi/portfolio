import '/src/assets/css/Footer.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const liElements = footerRef.current.querySelectorAll('li');
    const images = footerRef.current.querySelectorAll('li img');

    // 🛠 Timeline en pause au départ
    const tl = gsap.timeline({ paused: true });

    // 1) Animation des carrés rouges
    tl.from(liElements, {
      scale: 0.4,
      autoAlpha: 0,
      duration: 0.3,
      stagger: 0.1,
      clearProps: "all"
    })
    .from(images, {
      scale: 0.4,
      autoAlpha: 0,
      duration: 0.3,
      stagger: 0.1,
      clearProps: "all"
    }, '-=0.3');

    // 📌 Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Footer visible:", entry.isIntersecting); // 🔍 Debug

        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.reverse();
        }
      },
      {
        root: null, 
        threshold: 0.05,
      }
    );

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer>
      <div className="footerContent" ref={footerRef}>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/eigsi" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/footer/githubRed.png" alt="github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/antoine-simon-a1105a2a2" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/footer/linkedinRed.png" alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://waveemusic.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/footer/waveeRed.png" alt="wavee" />
            </a>
          </li>
          <li>
            <a href="mailto:antoine.simon.26@eigsi.fr">
              <img src="src/assets/images/footer/mailRed.png" alt="mail" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
