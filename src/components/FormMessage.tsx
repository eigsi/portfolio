import '/src/assets/css/FormMessage.css'
import { useEffect, useRef } from 'react';

interface FormMessageProps {
  refProp: React.RefObject<HTMLDivElement>;
  status: { type: 'success' | 'error'; message: string } | null;
  onContinue: () => void;
}

function FormMessage({ refProp, status, onContinue }: FormMessageProps) {
  if (!status) return null;

  const isSuccess = status.type === 'success';
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!messageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          messageRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(messageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="form-message" ref={refProp}>
      <div className="form-message-content" ref={messageRef}>
        <h3>{isSuccess ? 'Thank you!' : 'Oops!'}</h3>
        <p>{status.message}</p>
        <button onClick={onContinue}>Continue</button>
      </div>
    </section>
  );
}
  
  export default FormMessage;