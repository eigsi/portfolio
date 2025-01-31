import FloatingLabelInput from './FloatingLabel';
import FormMessage from './FormMessage';
import '/src/assets/css/Contact.css'
import { useRef, useEffect, useState } from 'react'

function Contact() {
    const formRef = useRef<HTMLHeadingElement>(null);
    type StatusType = { type: 'success' | 'error'; message: string } | null;
    const [status, setStatus] = useState<StatusType>(null);
    const [showMessage, setShowMessage] = useState(false);

    const formMessageRef = useRef<HTMLDivElement>(null);
    const SCROLL_OFFSET = 200;

    // Animation Section
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

    // -- Soumission du formulaire --
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                form.reset();
                setStatus({ type: 'success', message: 'Your message has been sent!' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Something went wrong, please try again.',
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Network error, please try again.',
            });
        }

        // On affiche le message
        setShowMessage(true);
    };

    // -- Scroller vers le FormMessage quand il apparaît --
    useEffect(() => {
        if (!showMessage) return;

         requestAnimationFrame(() => {
      if (formMessageRef.current) {
        const rect = formMessageRef.current.getBoundingClientRect();
        // Position absolue de l'élément dans la page
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetPosition = rect.top + scrollTop - SCROLL_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  }, [showMessage]);

    // -- Gestion du "Continue" --
    const handleContinue = () => {
        // On scrolle vers la section Contact
        if (formRef.current) {
            window.scrollTo({
                top: formRef.current.offsetTop - SCROLL_OFFSET,
                behavior: 'smooth',
            });
        }

        // On attend un peu que le scroll se termine avant de masquer le message
        setTimeout(() => {
            setShowMessage(false);
            setStatus(null);
        }, 500); // Ajustez la durée si besoin
    };

    return (
        <section className="contact" id='contact' ref={formRef}>
            <h2>Contact</h2>
            <form action="https://formspree.io/f/manqjyqv" method="POST" onSubmit={handleSubmit}>
                <FloatingLabelInput label="Your Email" name="email" type="email" />
                <FloatingLabelInput label="Your Message" name="message" isTextarea={true} />
                <button className='sendButton' type="submit">Send</button>
            </form>
            {showMessage && (
                <FormMessage
                    refProp={formMessageRef}  // on passe la ref, renommée pour éviter les conflits
                    status={status}
                    onContinue={handleContinue}
                />
            )}
        </section>
    );
};

export default Contact;