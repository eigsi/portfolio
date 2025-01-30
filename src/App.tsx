
import "/src/assets/css/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {

  useEffect(() => {

    window.history.scrollRestoration = "manual";
    gsap.to(window, { scrollTo: 0, duration: 0, overwrite: "auto" }); 
  }, []);


  return (
    <div>
      <Header />
      <div className="gradient-mask"></div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
