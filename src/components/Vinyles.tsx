import { useEffect } from "react";
import { gsap } from "gsap";
import '/src/assets/css/Vinyles.css'


function Vinyles() {

  // TURN THE VINYLES
  useEffect(() => {
    const vinyles = document.querySelectorAll(".vinyle");

    vinyles.forEach((vinyle) => {
      gsap.to(
        vinyle,
        {
          rotation: "+=360",
          duration: 10,
          repeat: -1,
          ease: "none",
          modifiers: {
            rotation: (value) => `${parseFloat(value) % 360}`,
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
