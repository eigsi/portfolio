import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '/src/assets/css/About.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ReplayIcon from '@mui/icons-material/Replay';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Titre from './Titre';
import Skills from "./Skills";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Découper texte
function wrapWordsWithSpan(text: string) {
  const words = text.split(" ");
  const groupedWords = [];

  for (let i = 0; i < words.length; i += 9) {
    const group = words.slice(i, i + 9).join(" "); // Regroupe 3 mots
    groupedWords.push(`<span class="word">${group} </span>`); // Wrap dans un <span>
  }

  return groupedWords.join(""); // Retourne le texte final avec les groupes
}

function About() {

  // Références pour cibler les éléments
  const aboutRef = useRef(null)
  const titleRef = useRef(null)
  const rectRef = useRef(null)
  const skillsRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // 1) Sélection et wrapping des lyrics
      const lyricsEl = document.querySelector('.lyricsRectangle') as HTMLDivElement | null;
      let wordSpans: NodeListOf<HTMLSpanElement> | null = null;
      if (lyricsEl && lyricsEl.textContent) {
        // Récupérer le texte brut
        const originalText = lyricsEl.textContent.trim();
        // Transformer en <span class="word">word </span>
        const wrappedHTML = wrapWordsWithSpan(originalText);
        // Remplacer le contenu par ce nouveau HTML
        lyricsEl.innerHTML = wrappedHTML;
        // Sélectionner tous les mots
        wordSpans = lyricsEl.querySelectorAll('.word');
      }

      let scrollNeeded = 0;
      if (lyricsEl) {
        const scrollHeight = lyricsEl.scrollHeight
        const clientHeight = lyricsEl.clientHeight
        scrollNeeded = scrollHeight - clientHeight
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top+=70% top',
          end: '+=2000',
          scrub: true,
          pin: true,
          // markers: true
        }
      })

      // --------------------------------
      // PHASE A : Animation du rectangle
      // --------------------------------

      // Animation du titre
      tl.to(titleRef.current, {
        scale: 0.5,
        y: -100,
        ease: 'none'
      })

      // Le rectangle « slide » vers le haut
      tl.fromTo(rectRef.current,
        { y: 0 },
        { y: 30, ease: 'none' },
        0 // lance en même temps que l’animation du titre
      )

        // Le rectangle s’agrandit
        .to(rectRef.current, {
          height: '65vh',
          borderRadius: '2rem',
          ease: 'none'
        }, '<')
        .add('rectGrowStart', '<')

        // Apparition des masques
        .fromTo(
          [".gradient-mask-top", ".gradient-mask-bot"],
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'none' },
          'rectGrowStart+=0.1'
        )

        // Apparition des lyrics
        .fromTo(
          ".lyricsRectangle",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'none' },
          'rectGrowStart+=0.2'
        )

      // Animation titre
      tl.fromTo(
        [".rectanlgeTitle"],
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" },
        'rectGrowStart+=0.1'
      )

      // Animation boutons
      tl.fromTo(
        [".btnsRectangle"],
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" },
        '<0.15'
      )

      // ------------------------
      // PHASE B : Scroll des lyrics
      // ------------------------

      tl.fromTo(
        lyricsEl,
        { scrollTop: 0 },
        {
          scrollTop: scrollNeeded,
          ease: 'none',
          onStart: () => {
            if (lyricsEl) {
              lyricsEl.style.overflowY = 'auto';
            }
          },
        },
        'rectGrowEnd+=0.05'
      )


      // 2ème animation : faire passer chaque mot de noir à blanc
      if (wordSpans) {

        wordSpans.forEach((word, index) => {
          if (index < 1) {
            word.style.color = "#fff";
          }
        });

        tl.to(
          wordSpans,
          {
            color: "#fff",
            ease: 'steps(1)',

            stagger: {
              each: (.7 / wordSpans.length),
              from: "start"
            }
          },
          'rectGrowEnd-=0.4'
        );
      }

      // -----------------------------
      // PHASE C : Rectangle disparaît
      // -----------------------------

      // rectangle end 
      tl.to(rectRef.current, {
        scale: 0.2,
        y: -200,
        opacity: 0,
        transformOrigin: 'center top',
        ease: 'power4.inOut',
        duration: 1.5
      }, 'allWordsWhite-=0.1')

      tl.fromTo(
        lyricsEl,
        { scrollTop: 0 },
        {
          scrollTop: scrollNeeded,
          ease: 'none',
        },
        'rectGrowEnd+=0.05'
      )

      // -------------------------------
      // PHASE D : Apparition des skills
      // -------------------------------
      tl.fromTo(skillsRef.current, {
        scale: 0.5,
        y: 200,
        opacity: 0,
      },
        {
          scale: 1,
          y: -150,
          opacity: 1,
          transformOrigin: 'center top',
          ease: 'power4.inOut',
          duration: 1.5,
        }, '<0.6')

    }, aboutRef)

    return () => ctx.revert()
  }, [])

  // -------------------------------------
  // ------------- CONTENT ---------------
  // -------------------------------------

  return (
    <main>
      <section id="about" className="about" ref={aboutRef}>
        <h1 ref={titleRef}>  <Titre /></h1>
        <div className='rectangleAbout' id="rectangleAbout" ref={rectRef}>
          {/* TOP */}
          <div className='topRectangle'>

            <div className='rectanlgeTitle'>
              <h3>Introduction: About me</h3>
              <h4>Antoine Simon</h4>
            </div>
          </div>
          {/* GRADIENT TOP */}
          <div className="mask gradient-mask-top"></div>
          {/* LYRICS */}
          <div className='lyricsRectangle'>
            <p>
              Hi, I’m Antoine SIMON, a 4th-year engineering student specializing in Computer Science, currently seeking a 2–3 month internship starting in early June.
            </p>
            <p>
              I love blending creativity with logic and tackling challenges, which is why I’m having so much fun developing this portfolio and my other projects.
            </p>
            <p>
              I’m always looking for new ways to achieve beautiful results or solve complex problems.
            </p>
            <p>
              Thank you for your time, I hope you will enjoy your journey!
            </p>

          </div>

          {/* GRADIENT BOT */}
          <div className="mask gradient-mask-bot"></div>
          {/* BOTTOM */}
          <div className='botRectangle'>

            {/* BTNS RECTANGLE */}

            <div className='btnsRectangle'>
              <div className="icon-rectangle icon-shuffle">
                <ShuffleIcon style={{ fontSize: '30px', color: '#FBFBFB', opacity: 0.8 }} />
              </div>
              <div className="icon-rectangle icon-previous">
                <SkipPreviousIcon style={{ fontSize: '40px', color: '#FBFBFB' }} />
              </div>
              <div className="icon-rectangle icon-play">
                <PlayArrowIcon style={{ fontSize: '40px', color: '#c74038' }} />
              </div>
              <div className="icon-rectangle icon-next">
                <SkipNextIcon style={{ fontSize: '40px', color: '#FBFBFB' }} />
              </div>
              <div className="icon-rectangle icon-replay">
                <ReplayIcon style={{ fontSize: '30px', color: '#FBFBFB', opacity: 0.8 }} />
              </div>

            </div>
          </div>


        </div>
      </section>
      <Skills ref={skillsRef} />
      <Projects ref={ProjectsRef} />
    </main>
  )
}

export default About