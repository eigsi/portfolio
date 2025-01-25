import '/src/assets/css/Skills.css'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

gsap.registerPlugin(ScrollTrigger)

function Skills() {
    const skillsRef = useRef(null)
    const titleRef = useRef(null)
    const playlist1Ref = useRef(null)
    const playlist2Ref = useRef(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 60%', 
                    end: 'bottom top', 
                    scrub: false,   
                    toggleActions: 'restart none none reverse'
                }
            });

            // Animation TITRE
            tl.fromTo(
                titleRef.current,
                { y: 400,scale: 2, opacity: 0 },   
                { scale: 1, opacity: 1, duration: 0.6, y: 0, ease: 'power2.out' }
            )
            .addLabel('playlistsStart', '<') 
            .fromTo(
                playlist1Ref.current,
                { x: -80, opacity: 0 },   
                { opacity: 1, duration: 0.4, x: 0, ease: 'power1.out' },
                'playlistsStart+=0.2'
            )
            .fromTo(
                playlist2Ref.current,
                { x: -80, opacity: 0 },   
                { opacity: 1, duration: 0.4, x: 0, ease: 'power1.out' },
                'playlistsStart+=0.3'
            );
        }, skillsRef);
        return () => ctx.revert();
    }, []);



    return (
        <section id="skills" className='skills' ref={skillsRef}>
            <h2 ref={titleRef}>My Favorite Playlists</h2>
            <div className='playlist codePlaylist' ref={playlist1Ref}>
                <div className='playlistLeft'>
                    <img src="src/assets/images/cover/codePlaylist.png" alt="Code Playlist" />
                    <div className='playlistInfos'>
                        <h3>Coding tools 2025</h3>
                        <h4>8 Songs</h4>
                    </div>
                </div>
                <div className='playlistRight'>
                    <PlayArrowIcon style={{ fontSize: '40px', color: '#0e191a', background: 'white', padding: '.4rem', borderRadius: '50%' }} />
                </div>
            </div>
            <div className='playlist logicielPlaylist' ref={playlist2Ref}>
                <div className='playlistLeft'>
                    <img src="src/assets/images/cover/logicielsPlaylist.png" alt="Logiciels Playlist" />
                    <div className='playlistInfos'>
                        <h3>Editing faster</h3>
                        <h4>4 Songs</h4>
                    </div>
                </div>
                <div className='playlistRight'>
                    <PlayArrowIcon style={{ fontSize: '40px', color: '#0e191a', background: 'white', padding: '.4rem', borderRadius: '50%' }} />
                </div>

            </div>
        </section>
    )
}

export default Skills