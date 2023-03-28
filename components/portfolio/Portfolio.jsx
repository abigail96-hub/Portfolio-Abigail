import React from "react";
import "./portfolio.css";
import Imagenpi from "../../assets/imagenpi.jpeg";
import Hmusic from "../../assets/Hmusic.jpeg";
import IMG3 from "../../assets/project3.jpeg";
import { BsGithub } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Imagenpi} alt="img1" />
          </div>
          <div className="noimg">
            <h3>Country App</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/abigail96-hub/PI-Countries-main.git"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="github.com/abigail96-hub/PI-Countries-main"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Hmusic} alt="img2" />
          </div>
          <div className="noimg">
            <h3>App Streaming Music "Henry Music"</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/juanxp1/henryMusic.git"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="https://henrymusic.tech/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        
      </div>
    </section>
  );
};
        {/* <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG3} alt="img3" />
          </div>
          <div className="noimg">
            <h3>Posada Brillo de Luna</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/JuanCruzRausch/Posada-Brillo-De-Luna"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="http://posadabrillodeluna.com.ar/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div> */}
  

export default Portfolio;
