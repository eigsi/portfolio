import '/src/assets/css/SlideBtns.css'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { forwardRef, useEffect, useState } from 'react';


interface SlideBtnsProps {
  slidesContainerRef: React.RefObject<HTMLDivElement>;
}

const SlideBtns = forwardRef<HTMLDivElement, SlideBtnsProps>(({ slidesContainerRef }, ref) => {
  const [slidePositions, setSlidePositions] = useState<number[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = slidesContainerRef.current;
    if (!container) return;

    // Récupère tous les .slide
    const slides = Array.from(container.querySelectorAll('.slide')) as HTMLDivElement[];

    // Calcule la position pour centrer chaque slide
    // => On veut scrollLeft = positionDuSlide - (containerWidth/2 - slideWidth/2)
    //    pour placer le slide pile au centre
    const positions = slides.map(slide => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const containerCenter = container.clientWidth / 2;
      // position d'arrivée
      return slideCenter - containerCenter; 
    });

    setSlidePositions(positions);
  }, [slidesContainerRef]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0)); // on évite < 0
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // pas plus que le dernier index
      return Math.min(prev + 1, slidePositions.length - 1);
    });
  };

  // Quand currentIndex change, on scroll
  useEffect(() => {
    const container = slidesContainerRef.current;
    if (!container) return;
    if (slidePositions.length === 0) return;

    container.scrollTo({ 
      left: slidePositions[currentIndex], 
      behavior: 'smooth' 
    });
  }, [currentIndex, slidePositions, slidesContainerRef]);

  return (
    <section className='boutonsSection' ref={ref}>
      <button className='boutonLeft' onClick={handlePrev}>
        <ArrowBackIos sx={{ fontSize: "2rem" }}/>
      </button>
      <button className='boutonRight' onClick={handleNext}>
        <ArrowForwardIos sx={{ fontSize: "2rem" }}/>
      </button>
    </section>
  );
});

export default SlideBtns;

