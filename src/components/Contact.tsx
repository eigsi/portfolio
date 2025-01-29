import FloatingLabelInput from './FloatingLabel';
import '/src/assets/css/Contact.css'
import { useRef, useEffect } from 'react'

function Contact() {
    const formRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (formRef.current) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
              } else {
                entry.target.classList.remove('in-view');
              }
            },
            {
              threshold: 0.5,
            }
          );
    
          observer.observe(formRef.current);
    
          return () => observer.disconnect();
        }
      }, []);


    return (
        <section className="contact" id='contact' ref={formRef}>
            <h2>Contact</h2>
            <form action="https://formspree.io/f/{ton_form_id}" method="POST">
                <FloatingLabelInput label="Your Email" name="email" type="email" />
                <FloatingLabelInput label="Your Message" name="message" isTextarea={true} />
                <button className='sendButton'>Send</button>
            </form>
        </section>
    );
};

export default Contact;