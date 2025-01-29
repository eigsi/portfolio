import { useRef, forwardRef, useEffect } from 'react'
import '/src/assets/css/Projects.css'

const Projects = forwardRef<HTMLDivElement>((_, ref) => {

  const slidesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Animation Titre
  useEffect(() => {
    if (titleRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        },
        {
          threshold: 1,
        }
      );

      observer.observe(titleRef.current);

      return () => observer.disconnect();
    }
  }, []);

  // Animation SlideTop
  useEffect(() => {
    const slideTops = slidesRef.current?.querySelectorAll('.slideTop');
    if (!slideTops) return;

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
        threshold: 0.8, // 80% de l'élément visible
      }
    );

    slideTops.forEach((slideTop) => observer.observe(slideTop));

    // Nettoyage
    return () => {
      observer.disconnect();
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
    
            <img
              src="src/assets/images/wavee/wavee1.png"
              alt="Wavee HomePage"
              className="waveeImg"
            />
          
        </div>

        {/* SLIDE 2 */}
        <div className='slide slide2'>
          <div className='slideTop slideTop2'>
            <h3>Live Through Music</h3>
            <p>Rate albums, write reviews, and see what your friends think. <br></br>Music is better when shared. </p>
            <a href='https://waveemusic.com'>Start Now !</a>
          </div>
          <div className='backgroundImgContainer'>
          <img
            src="src/assets/images/wavee/ipad2.png"
            alt="Wavee HomePage"
            className="backgroundImg2"
          />
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className='slide slide3'>
          <div className='slideTop slideTop3'>
            <h3>Powered by Innovation</h3>
            <p>Built with cutting-edge technologies like Symfony, Kubernetes, and PostgreSQL. </p>
            <div className='slideBottom slideBottom3'>

              <img
                src="src/assets/images/wavee/symfony.png"
                alt="Symfony"
                className="slide3Img"
              />
              <img
                src="src/assets/images/wavee/kubernetes.png"
                alt="Kubernetes"
                className="slide3Img"
              />
              <img
                src="src/assets/images/wavee/postgresql.png"
                alt="postgresql"
                className="slide3Img"
              />

            </div>
          </div>
          <div className='backgroundImgContainer'>

            <img
              src="src/assets/images/wavee/ipad3.png"
              alt="waveeCollectionPage"
              className="backgroundImg"
            />
          </div>

        </div>

        {/* SLIDE 4 */}
        <div className='lastSlide'>
          <div className='slide slide4'>
            <div className='slideTop slideTop4'>
              <h3>Coming to iOS</h3>
              <p>The iOS version is on its way! Soon, discover music, rate albums, and connect with friends right from your iPhone.</p>
              <div className='logos'>
                <img
                  src="src/assets/images/wavee/swift.png"
                  alt="Swift"
                  className="swiftLogo logosImg"
                />
                <img
                  src="src/assets/images/wavee/ios.png"
                  alt="iOS"
                  className="iosLogo logosImg"
                />
              </div>
            </div>
            <div className='slideRight'>
              <img
                src="src/assets/images/wavee/iphones.png"
                alt="Wavee HomePage"
                className="iphones"
              />
            </div>
          </div>
          <div className='slideEmpty'>
          </div>
        </div>
      </section>
    </section>
  )
});

export default Projects