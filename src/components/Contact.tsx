import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import FloatingLabelInput from './FloatingLabel';
import '/src/assets/css/Contact.css';

function Contact() {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 200, scale: 1.5 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 100%",
                        toggleActions: "play"
                    }
                }
            );
        }
    }, []);

    return (
        <section className="contact" id="contact" ref={formRef}>
            <h2>Contact</h2>
            <form action="https://formspree.io/f/{ton_form_id}" method="POST">
                <FloatingLabelInput label="Your Email" name="email" type="email" />
                <FloatingLabelInput label="Your Message" name="message" isTextarea={true} />
                <button className="sendButton">Send</button>
            </form>
        </section>
    );
}

export default Contact;
