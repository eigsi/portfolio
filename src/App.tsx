
import "/src/assets/css/App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {

  return (
    <div>
      <Header />
      <div className="gradient-mask"></div>
      <main>
        <About />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
