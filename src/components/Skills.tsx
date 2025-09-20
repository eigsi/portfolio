import "/src/assets/css/Skills.css";
import { useRef, useState, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Vinyles from "./Vinyles";
import Cd from "./Cd";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  const playlist1Ref = useRef<HTMLDivElement>(null);
  const playlist2Ref = useRef<HTMLDivElement>(null);

  const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null);

  const handlePlaylistClick = (playlist: string) => {
    // Identifier l'élément de la playlist cliqué
    const playlistRef = playlist === "playlist1" ? playlist1Ref : playlist2Ref;

    let mm = gsap.matchMedia();

    if (playlistRef.current) {
      // Si la même playlist est cliquée, réduire avec une animation fluide
      if (expandedPlaylist === playlist) {
        mm.add("(max-width: 480px)", () => {
          gsap.to(playlistRef.current, {
            height: "20vw",
            marginBottom: "1rem",
            marginTop: "0",
            duration: 0.1,
            ease: "power1.InOut",
            onComplete: () => {
              // Scroll au centre de la section skills
              if (ref && "current" in ref && ref.current) {
                gsap.to(window, {
                  scrollTo: {
                    y: ref.current, // La référence de la section skills
                    offsetY:
                      playlist === "playlist1"
                        ? window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          135 // Offset pour playlist 1
                        : window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          120, // Offset pour playlist 2
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
        mm.add("(min-width: 481px) and (max-width: 768px)", () => {
          gsap.to(playlistRef.current, {
            height: "15vw",
            marginBottom: "1rem",
            marginTop: "0",
            duration: 0.1,
            ease: "power1.InOut",
            onComplete: () => {
              // Scroll au centre de la section skills
              if (ref && "current" in ref && ref.current) {
                gsap.to(window, {
                  scrollTo: {
                    y: ref.current, // La référence de la section skills
                    offsetY:
                      playlist === "playlist1"
                        ? window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          135 // Offset pour playlist 1
                        : window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          120, // Offset pour playlist 2
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
        mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
          gsap.to(playlistRef.current, {
            height: "11vw",
            marginBottom: "1rem",
            marginTop: "0",
            duration: 0.1,
            ease: "power1.InOut",
            onComplete: () => {
              // Scroll au centre de la section skills
              if (ref && "current" in ref && ref.current) {
                gsap.to(window, {
                  scrollTo: {
                    y: ref.current, // La référence de la section skills
                    offsetY:
                      playlist === "playlist1"
                        ? window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          135 // Offset pour playlist 1
                        : window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          120, // Offset pour playlist 2
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
        mm.add("(min-width: 1025px)", () => {
          gsap.to(playlistRef.current, {
            height: "10vw",
            marginBottom: "1rem",
            marginTop: "0",
            duration: 0.1,
            ease: "power1.InOut",
            onComplete: () => {
              // Scroll au centre de la section skills
              if (ref && "current" in ref && ref.current) {
                gsap.to(window, {
                  scrollTo: {
                    y: ref.current, // La référence de la section skills
                    offsetY:
                      playlist === "playlist1"
                        ? window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          135 // Offset pour playlist 1
                        : window.innerHeight / 2 -
                          ref.current.getBoundingClientRect().height / 2 +
                          120, // Offset pour playlist 2
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
        setExpandedPlaylist(null);
      } else {
        mm.add("(max-width: 480px)", () => {
          gsap.to(playlistRef.current, {
            height: playlist === "playlist1" ? "55vw" : "52vw",
            marginBottom: playlist === "playlist1" ? "3rem" : "0",
            marginTop: playlist === "playlist1" ? "0" : "3rem",
            duration: 0.2,
            ease: "power4.out",
            onComplete: () => {
              // scroll
              if (playlistRef.current) {
                let offset =
                  window.innerHeight / 2 -
                  playlistRef.current.getBoundingClientRect().height / 2;
                if (expandedPlaylist && expandedPlaylist !== playlist) {
                  const prevRef =
                    expandedPlaylist === "playlist1"
                      ? playlist1Ref
                      : playlist2Ref;

                  if (prevRef.current) {
                    // Ajustement spécifique basé sur la playlist qui se ferme
                    let manualOffsetAdjustment = 0;

                    if (expandedPlaylist === "playlist1") {
                      manualOffsetAdjustment = 160;
                    } else if (expandedPlaylist === "playlist2") {
                      manualOffsetAdjustment = 0;
                    }

                    offset += manualOffsetAdjustment;
                  }
                }
                gsap.to(window, {
                  scrollTo: {
                    y: playlistRef.current,
                    offsetY: offset,
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });

        mm.add("(min-width: 481px) and (max-width: 768px)", () => {
          gsap.to(playlistRef.current, {
            height: playlist === "playlist1" ? "40vw" : "35vw",
            marginBottom: playlist === "playlist1" ? "3rem" : "0",
            marginTop: playlist === "playlist1" ? "0" : "3rem",
            duration: 0.2,
            ease: "power4.out",
            onComplete: () => {
              // scroll
              if (playlistRef.current) {
                let offset =
                  window.innerHeight / 2 -
                  playlistRef.current.getBoundingClientRect().height / 2;
                if (expandedPlaylist && expandedPlaylist !== playlist) {
                  const prevRef =
                    expandedPlaylist === "playlist1"
                      ? playlist1Ref
                      : playlist2Ref;

                  if (prevRef.current) {
                    // Ajustement spécifique basé sur la playlist qui se ferme
                    let manualOffsetAdjustment = 0;

                    if (expandedPlaylist === "playlist1") {
                      manualOffsetAdjustment = 160;
                    } else if (expandedPlaylist === "playlist2") {
                      manualOffsetAdjustment = 0;
                    }

                    offset += manualOffsetAdjustment;
                  }
                }
                gsap.to(window, {
                  scrollTo: {
                    y: playlistRef.current,
                    offsetY: offset,
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });

        mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
          gsap.to(playlistRef.current, {
            height: playlist === "playlist1" ? "30vw" : "27vw",
            marginBottom: playlist === "playlist1" ? "3rem" : "0",
            marginTop: playlist === "playlist1" ? "0" : "3rem",
            duration: 0.2,
            ease: "power4.out",
            onComplete: () => {
              // scroll
              if (playlistRef.current) {
                let offset =
                  window.innerHeight / 2 -
                  playlistRef.current.getBoundingClientRect().height / 2;
                if (expandedPlaylist && expandedPlaylist !== playlist) {
                  const prevRef =
                    expandedPlaylist === "playlist1"
                      ? playlist1Ref
                      : playlist2Ref;

                  if (prevRef.current) {
                    // Ajustement spécifique basé sur la playlist qui se ferme
                    let manualOffsetAdjustment = 0;

                    if (expandedPlaylist === "playlist1") {
                      manualOffsetAdjustment = 160;
                    } else if (expandedPlaylist === "playlist2") {
                      manualOffsetAdjustment = 0;
                    }

                    offset += manualOffsetAdjustment;
                  }
                }
                gsap.to(window, {
                  scrollTo: {
                    y: playlistRef.current,
                    offsetY: offset,
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });

        mm.add("(min-width: 1025px)", () => {
          gsap.to(playlistRef.current, {
            height: "25vw",
            marginBottom: playlist === "playlist1" ? "3rem" : "0",
            marginTop: playlist === "playlist1" ? "0" : "3rem",
            duration: 0.2,
            ease: "power4.out",
            onComplete: () => {
              // scroll
              if (playlistRef.current) {
                let offset =
                  window.innerHeight / 2 -
                  playlistRef.current.getBoundingClientRect().height / 2;
                if (expandedPlaylist && expandedPlaylist !== playlist) {
                  const prevRef =
                    expandedPlaylist === "playlist1"
                      ? playlist1Ref
                      : playlist2Ref;

                  if (prevRef.current) {
                    // Ajustement spécifique basé sur la playlist qui se ferme
                    let manualOffsetAdjustment = 0;

                    if (expandedPlaylist === "playlist1") {
                      manualOffsetAdjustment = 160;
                    } else if (expandedPlaylist === "playlist2") {
                      manualOffsetAdjustment = 0;
                    }

                    offset += manualOffsetAdjustment;
                  }
                }
                gsap.to(window, {
                  scrollTo: {
                    y: playlistRef.current,
                    offsetY: offset,
                  },
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
        if (expandedPlaylist) {
          const prevRef =
            expandedPlaylist === "playlist1" ? playlist1Ref : playlist2Ref;
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
    <section id="skills" className="skills" ref={ref}>
      <h2>My Favorite Playlists</h2>
      <div
        className={`playlist codePlaylist ${
          expandedPlaylist === "playlist1" ? "expanded" : ""
        }`}
        ref={playlist1Ref}
        onClick={() => handlePlaylistClick("playlist1")}
      >
        <div className="playlistTop">
          <div className="playlistLeft">
            <img src="/images/cover/codePlaylist.png" alt="Code Playlist" />
            <div className="playlistInfos">
              <h3>Main Coding tools 2025</h3>
              <h4>4 Songs</h4>
              <h5>3 Songs</h5>
            </div>
          </div>
          <div className="playlistRight">
            <PlayArrowIcon
              className={`play-button ${
                expandedPlaylist === "playlist1" ? "rotated" : ""
              }`}
            />
          </div>
        </div>
        <Vinyles />
      </div>
      <div
        className={`playlist logicielPlaylist ${
          expandedPlaylist === "playlist2" ? "expanded" : ""
        }`}
        ref={playlist2Ref}
        onClick={() => handlePlaylistClick("playlist2")}
      >
        <div className="playlistTop">
          <div className="playlistLeft">
            <img
              src="/images/cover/logicielsPlaylist.png"
              alt="Logiciels Playlist"
            />
            <div className="playlistInfos">
              <h3>Design & Editing </h3>
              <h4>4 Songs</h4>
              <h5>3 Songs</h5>
            </div>
          </div>
          <div className="playlistRight">
            <PlayArrowIcon
              className={`play-button ${
                expandedPlaylist === "playlist2" ? "rotated" : ""
              }`}
            />
          </div>
        </div>
        <Cd />
      </div>
    </section>
  );
});

export default Skills;
