import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Tools from "./components/tools/Tools";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Certificate from "./components/certificate/Certificate";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Tools /> */}
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
