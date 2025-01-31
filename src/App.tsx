
import "/src/assets/css/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [aboutKey, setAboutKey] = useState(0);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    gsap.to(window, { scrollTo: 0, duration: 0, overwrite: "auto" });
  }, []);

  // Ecoute le resize et applique un debounce
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // ICI on va incrémenter aboutKey
        setAboutKey((prev) => prev + 1);
      }, 300); // 300ms de délai après la fin du resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);


  return (
    <div>
      <Header />
      <div className="gradient-mask"></div>
      <About key={aboutKey} />
      <Footer />
    </div>
  );
}

export default App;
