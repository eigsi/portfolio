import FloatingLabelInput from './FloatingLabel';
import '/src/assets/css/Contact.css'

function Contact() {


    return (
        <section className="contact" id='contact'>
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