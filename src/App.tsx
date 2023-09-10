import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import PhoneNav from "./components/PhoneNav";
import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Home />
        <Projects />
        <Experience />
        <Footer />
        <PhoneNav />
      </div>
    </>
  );
};

export default App;
