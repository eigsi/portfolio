
import "/src/assets/css/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {

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
