import '/src/assets/css/Skills.css'
import { useRef, useState, forwardRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Vinyles from "./Vinyles";
import Cd from "./Cd";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Skills = forwardRef<HTMLDivElement>((_, ref) => {

    const playlist1Ref = useRef<HTMLDivElement>(null)
    const playlist2Ref = useRef<HTMLDivElement>(null)

    const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null)


    const handlePlaylistClick = (playlist: string) => {
        // Identifier l'élément de la playlist cliqué
        const playlistRef = playlist === 'playlist1' ? playlist1Ref : playlist2Ref;

        if (playlistRef.current) {
            // Si la même playlist est cliquée, réduire avec une animation fluide
            if (expandedPlaylist === playlist) {
                gsap.to(playlistRef.current, {
                    height: "10vw",
                    marginBottom: "1rem",
                    marginTop: "0",
                    duration: 0.1,
                    ease: "power1.InOut",
                    onComplete: () => {
                        // Scroll au centre de la section skills
                        if (ref && 'current' in ref && ref.current) {
                            gsap.to(window, {
                                scrollTo: {
                                    y: ref.current, // La référence de la section skills
                                    offsetY:
                                        playlist === 'playlist1'
                                            ? window.innerHeight / 2 - ref.current.getBoundingClientRect().height / 2 + 110 // Offset pour playlist 1
                                            : window.innerHeight / 2 - ref.current.getBoundingClientRect().height / 2 + 95, // Offset pour playlist 2
                                },
                                duration: 0.5,
                                ease: "power2.inOut",
                            });
                        }
                    },
                });
                setExpandedPlaylist(null);
            } else {
                gsap.to(playlistRef.current, {
                    height: "25vw",
                    marginBottom: playlist === 'playlist1' ? "3rem" : "0",
                    marginTop: playlist === 'playlist1' ? "0" : "3rem",
                    duration: 0.2,
                    ease: "power4.out",
                    onComplete: () => {
                        // scroll
                        if (playlistRef.current) {
                            gsap.to(window, {
                                scrollTo: {
                                    y: playlistRef.current,
                                    offsetY:
                                        playlist === 'playlist1'
                                            ? window.innerHeight / 2 - playlistRef.current.getBoundingClientRect().height / 2
                                            : window.innerHeight / 2 - playlistRef.current.getBoundingClientRect().height / 2,
                                },
                                duration: .5,
                                ease: "power2.inOut",
                            });
                        }
                    },  
                });
                if (expandedPlaylist) {
                    const prevRef = expandedPlaylist === 'playlist1' ? playlist1Ref : playlist2Ref;
                    if (prevRef.current) {
                        gsap.to(prevRef.current, {
                            height: "auto",
                            marginBottom: "1rem",
                            marginTop: "0",
                            duration: 0.5,
                            ease: "power2.out",
                        });
                    }
                }

                setExpandedPlaylist(playlist);
            }
        }
    };


    return (
        <section id="skills" className='skills' ref={ref}>
            <h2>My Favorite Playlists</h2>
            <div
                className={`playlist codePlaylist ${expandedPlaylist === 'playlist1' ? 'expanded' : ''}`}
                ref={playlist1Ref}
                onClick={() => handlePlaylistClick('playlist1')}
            >
                <div className='playlistTop'>
                    <div className='playlistLeft'>
                        <img src="src/assets/images/cover/codePlaylist.png" alt="Code Playlist" />
                        <div className='playlistInfos'>
                            <h3>Main Coding tools 2025</h3>
                            <h4>8 Songs</h4>
                        </div>
                    </div>
                    <div className='playlistRight'>
                        <PlayArrowIcon
                            style={{ fontSize: '40px', color: '#fff0f0', background: '#c73f38', padding: '.4rem', borderRadius: '50%' }}
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
                            style={{ fontSize: '40px', color: '#fff0f0', background: '#c73f38', padding: '.4rem', borderRadius: '50%' }}
                            className={expandedPlaylist === 'playlist2' ? 'rotated' : ''}
                        />
                    </div>
                </div>
                <Cd />
            </div>
        </section>
    )
});

export default Skills