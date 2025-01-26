import '/src/assets/css/Skills.css'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Vinyles from "./Vinyles";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Skills() {
    const skillsRef = useRef(null)
    const titleRef = useRef(null)
    const playlist1Ref = useRef(null)
    const playlist2Ref = useRef(null)

    const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            // AVANT
            const forwardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: false,
                    toggleActions: 'restart none none none',
                    onEnter: () => {
                        //force scroll
                        gsap.to(window, {
                            scrollTo: {
                                y: skillsRef.current || 0, 
                                offsetY: 200,          
                                autoKill: false   
                            },
                            duration: 1,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                backwardTl.pause(0)
                            }
                        })
                    }
                }
            });

            forwardTl.fromTo(
                titleRef.current,
                { y: 400, scale: 2, opacity: 0 },
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
                    'playlistsStart+=0.4'
                )

            forwardTl.eventCallback('onComplete', () => {
                backwardTl.pause(0)
            });

            // RETOUR
            const backwardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 50%',
                    end: 'bottom top',
                    scrub: false,
                    toggleActions: 'none none none play',
                    // markers: true,
                    onEnterBack: () => {
                        forwardTl.pause(0) 
                    }
                },
            });

            backwardTl
                .to(skillsRef.current, {
                    y: 300,
                    scale: 0.5,
                    opacity: 0.5,
                    duration: 0.6,
                    ease: 'power4.in',
                })
            backwardTl.eventCallback('onComplete', () => {
                forwardTl.pause(0)
            });

        }, skillsRef);
        return () => ctx.revert();
    }, []);


    const handlePlaylistClick = (playlist: string) => {
        // Si la même playlist est cliquée, la réduire
        setExpandedPlaylist(prev => prev === playlist ? null : playlist);
    };

    return (
        <section id="skills" className='skills' ref={skillsRef}>
            <h2 ref={titleRef}>My Favorite Playlists</h2>
            <div
                className={`playlist codePlaylist ${expandedPlaylist === 'playlist1' ? 'expanded' : ''}`}
                ref={playlist1Ref}
                onClick={() => handlePlaylistClick('playlist1')}
            >
                <div className='playlistTop'>
                    <div className='playlistLeft'>
                        <img src="src/assets/images/cover/codePlaylist.png" alt="Code Playlist" />
                        <div className='playlistInfos'>
                            <h3>Coding tools 2025</h3>
                            <h4>8 Songs</h4>
                        </div>
                    </div>
                    <div className='playlistRight'>
                        <PlayArrowIcon
                            style={{ fontSize: '40px', color: '#0e191a', background: 'white', padding: '.4rem', borderRadius: '50%' }}
                            className={expandedPlaylist === 'playlist1' ? 'rotated' : ''}
                        />
                    </div>
                </div>
                <Vinyles />
            </div>
            <div
                className={`playlist logicielPlaylist ${expandedPlaylist === 'playlist2' ? 'expanded' : ''}`}
                ref={playlist2Ref}
                onClick={() => handlePlaylistClick('playlist2')}
            >
                <div className='playlistTop'>
                    <div className='playlistLeft'>
                        <img src="src/assets/images/cover/logicielsPlaylist.png" alt="Logiciels Playlist" />
                        <div className='playlistInfos'>
                            <h3>Editing faster</h3>
                            <h4>4 Songs</h4>
                        </div>
                    </div>
                    <div className='playlistRight'>
                        <PlayArrowIcon
                            style={{ fontSize: '40px', color: '#0e191a', background: 'white', padding: '.4rem', borderRadius: '50%' }}
                            className={expandedPlaylist === 'playlist2' ? 'rotated' : ''}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills