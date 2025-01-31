import { useRef, forwardRef, useEffect } from 'react'
import '/src/assets/css/Projects.css'
import SlideBtns from './SlideBtns';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {

  const slidesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const SlideBtnsRef = useRef<HTMLDivElement>(null);

  // Animation Titre
  useEffect(() => {
    if (!titleRef.current || !SlideBtnsRef.current) return;

    const updateObserver = () => {
      const thresholdValue = window.innerWidth <= 768 ? 0.6 : 1;
      let timeoutId: ReturnType<typeof setTimeout> | null = null;
      let lastState = false;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting;

          // Empêche un changement si ça oscille
          if (isVisible === lastState) return;

          if (isVisible) {
            entry.target.classList.add('in-view');

            // Supprime un timeout précédent (si existant)
            if (timeoutId) clearTimeout(timeoutId);

            // Ajoute un délai avant d'afficher les boutons
            timeoutId = setTimeout(() => {
              SlideBtnsRef.current?.classList.add('btns-in-view');
            }, 200);
          } else {
            entry.target.classList.remove('in-view');

            // Empêche que le bouton reste affiché
            if (timeoutId) clearTimeout(timeoutId);
            SlideBtnsRef.current?.classList.remove('btns-in-view');
          }


          lastState = isVisible; // Met à jour l'état
        },
        { threshold: thresholdValue }
      );

      if (titleRef.current) {
        observer.observe(titleRef.current);
      }
      return observer;
    };

    let observer = updateObserver(); // Initialisation de l'observer

    const handleResize = () => {
      observer.disconnect();
      observer = updateObserver();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation SlideTop
  useEffect(() => {
    const container = slidesRef.current;
    const slideTops = container?.querySelectorAll('.slideTop');
    if (!container || !slideTops) return;

    const updateObserver = () => {
      const thresholdValue = window.innerWidth <= 768 ? 0.5 : 0.8; // Plus bas sur mobile

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            } else {
              entry.target.classList.remove('in-view');
            }
          });
        },
        {
          root: container, // On limite l'observation au scroll dans .slides
          threshold: thresholdValue,
        }
      );

      slideTops.forEach((slideTop) => observer.observe(slideTop));

      return observer;
    };

    let observer = updateObserver(); // Initialisation de l'observer

    const handleResize = () => {
      observer.disconnect(); // Supprime l'ancien observer
      observer = updateObserver(); // Crée un nouvel observer avec le bon threshold
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <section className="projects" id='projects' ref={ref}>
      <h2 ref={titleRef}>My Biggest Project Yet</h2>
      <section className='slides' ref={slidesRef}>

        {/* SLIDE 1 */}
        <div className='slide slide1'>
          <div className='slideTop in-view'>
            <h3>Wavee</h3>
            <p>A social platform for rating and discovering music. </p>
          </div>

          <div className='backgroundImg backgroundImgContainer1'>
          </div>

        </div>

        {/* SLIDE 2 */}
        <div className='slide slide2'>
          <div className='slideTop slideTop2'>
            <h3>Live Through Music</h3>
            <p>Rate albums, write reviews, and see what your friends think. <br></br>Music is better when shared. </p>
            <a href='https://waveemusic.com'>Start Now !</a>
          </div>
          <div className='backgroundImg backgroundImgContainer2'>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className='slide slide3'>
          <div className='slideTop slideTop3'>
            <h3>Powered by Innovation</h3>
            <p>Built with cutting-edge technologies like Symfony, Kubernetes, and PostgreSQL. </p>
            <div className='slideBottom slideBottom3'>

              <img
                src="/images/wavee/symfony.png"
                alt="Symfony"
                className="slide3Img"
              />
              <img
                src="/images/wavee/kubernetes.png"
                alt="Kubernetes"
                className="slide3Img"
              />
              <img
                src="/images/wavee/postgresql.png"
                alt="postgresql"
                className="slide3Img"
              />

            </div>
          </div>
          <div className='backgroundImg backgroundImgContainer3'>
          </div>

        </div>

        {/* SLIDE 4 */}
        <div className='slide slide4'>
          <div className='slideTop slideTop4'>
            <h3>Coming to iOS</h3>
            <p>The iOS version is on its way! Soon, discover music, rate albums, and connect with friends right from your iPhone.</p>
            <div className='logos'>
              <img
                src="/images/wavee/swift.png"
                alt="Swift"
                className="swiftLogo logosImg"
              />
              <img
                src="/images/wavee/ios.png"
                alt="iOS"
                className="iosLogo logosImg"
              />
            </div>
          </div>
          <div className='backgroundImg backgroundImgContainer4'>
          </div>
        </div>


        {/* SLIDE 5 */}
        <div className='slide5'>
        </div>
      </section>
      <SlideBtns ref={SlideBtnsRef} slidesContainerRef={slidesRef} />
    </section>
  )
});

export default Projects