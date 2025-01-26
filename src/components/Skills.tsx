import '/src/assets/css/Skills.css'
import { useRef, useState, forwardRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Vinyles from "./Vinyles";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Skills = forwardRef<HTMLDivElement>((_, ref) => {

    const playlist1Ref = useRef(null)
    const playlist2Ref = useRef(null)

    const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null)


    const handlePlaylistClick = (playlist: string) => {
        // Si la même playlist est cliquée, la réduire
        setExpandedPlaylist(prev => prev === playlist ? null : playlist);
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
});

export default Skills