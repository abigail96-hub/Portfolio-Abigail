import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Abigail Cortes Sanchez
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://instagram.com/cortesaby_?igshid=YmMyMTA2M2Y=">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abigail-cortés-sánchez">
          <BsLinkedin />
        </a>
        {/* <a href="https://twitter.com/CruzRausch">
          <FiTwitter />
        </a> */}
      </div>
      <div className="footer_copyright">
        <small>&copy; Abigail Cortes Sanchez</small>
      </div>
    </footer>
  );
};

export default Footer;
