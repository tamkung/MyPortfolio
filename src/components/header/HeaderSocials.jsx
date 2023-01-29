import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://web.facebook.com/tam.waragorn" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
      <a href="https://github.com/tamkung" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      
    </div>
  );
};

export default HeaderSocials;
