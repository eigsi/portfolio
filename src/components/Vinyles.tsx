import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '/src/assets/css/Vinyles.css'

gsap.registerPlugin(ScrollTrigger);


function Vinyles() {

  // TURN THE VINYLES
  useEffect(() => {
    const vinyles = document.querySelectorAll(".vinyle");

    vinyles.forEach((vinyle) => {
      gsap.fromTo(
        vinyle,
        { rotation: 0 },
        {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: vinyle,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play pause resume stop",
          },
        }
      );
    });
  }, []);

  // SLIDE ANIMATION
  useEffect(() => {
    const cards = document.querySelectorAll(".vinyleCard");
  
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0, 
          opacity: 1,
          duration: 1,
          ease: "power2.out", 
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, []);
  
  return (
    <section className="vinyles">

      {/* FIRST ROW OF VINYLES */}
      
      <div className="firstRowVinyles">
        <div className="vinyleCard">
          <img
            src="src/assets/images/vinyles/dockerVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
          <h3>Docker</h3>
        </div>
        <div className="vinyleCard">
          <img
            src="src/assets/images/vinyles/sqlVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
           <h3>PostgreSQL</h3>
        </div>
        <div className="vinyleCard">
          <img
            src="src/assets/images/vinyles/htmlVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
           <h3>HTML</h3>
        </div>
        <div className="vinyleCard">
          <img
            src="src/assets/images/vinyles/reactVinyle.png"
            alt="Docker Vinyle"
            className="vinyle"
          />
           <h3>React</h3>
        </div>
      </div >

       {/* SECOND ROW OF VINYLES */}

      <div className="secondRowVinyles">
      <div className="vinyleCard">
        <img
          src="src/assets/images/vinyles/kubernetesVinyle.png"
          alt="Docker Vinyle"
          className="vinyle"
        />
               <h3>Kubernetes</h3>
        </div>
         <div className="vinyleCard">
        <img
          src="src/assets/images/vinyles/symfonyVinyle.png"
          alt="Docker Vinyle"
          className="vinyle"
        />
               <h3>Symfony</h3>
        </div>
         <div className="vinyleCard">
        <img
          src="src/assets/images/vinyles/swiftVinyle.png"
          alt="Docker Vinyle"
          className="vinyle"
        />
               <h3>Swift</h3>
        </div>
         <div className="vinyleCard">
        <img
          src="src/assets/images/vinyles/sassVinyle.png"
          alt="Docker Vinyle"
          className="vinyle"
        />
               <h3>SASS</h3>
        </div>
      </div>
    </section >
  );
}

export default Vinyles;
