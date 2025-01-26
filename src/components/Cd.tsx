import { useEffect } from "react";
import { gsap } from "gsap";
import '/src/assets/css/Vinyles.css'


function Cd() {

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

            <div className="firstRowVinyles">
                <div className="cdCard">
                    <img
                        src="src/assets/images/cd/aeCd.png"
                        alt="Ae cd"
                        className="cd"
                    />
                    <h3>After Effects</h3>
                </div>
                <div className="cdCard">
                    <img
                        src="src/assets/images/cd/blenderCd.png"
                        alt="Blender cd"
                        className="cd"
                    />
                    <h3>Blender</h3>
                </div>
                <div className="cdCard">
                    <img
                        src="src/assets/images/cd/psCd.png"
                        alt="Photoshop cd"
                        className="cd"
                    />
                    <h3>Photoshop</h3>
                </div>
                <div className="cdCard">
                    <img
                        src="src/assets/images/cd/illustratorCd.png"
                        alt="Illustrator cd"
                        className="cd"
                    />
                    <h3>Illustrator</h3>
                </div>
            </div >
        </section >
    );
}

export default Cd;
