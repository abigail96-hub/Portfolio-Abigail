import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/abigail-cort%C3%A9s-s%C3%A1nchez/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/abigail96-hub" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com/cortesaby_?igshid=YmMyMTA2M2Y=" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
