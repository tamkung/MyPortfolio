import React from "react";
import "./footer.css";
import { FaFacebook, FaLine, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#tools">Tools</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#certificate">Certificate</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/tam.waragorn" target="blank">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/tam.wt_1999" target="blank">
          <FaInstagram />
        </a>
        <a href="https://line.me/ti/p/qMNOSBe5Ks" target="blank">
          <FaLine />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Waragorn Thammasiri. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
