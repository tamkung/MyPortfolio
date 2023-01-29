import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Waragorn Thammasiri</h1>
        {/* <h4 className="text-light">CPAC Internship</h4> */}
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
