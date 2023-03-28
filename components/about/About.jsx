import React from "react";
import "./about.css";
import Abi from "../../assets/Abii.jpeg";
import { FaAward } from "react-icons/fa";
import { VscBriefcase } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Abi} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>

            <article className="about_card">
              <VscBriefcase className="about-icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>
          <p>
            Who am i? 🕵🏼‍♂️ <br />
            <br />
👨🏼‍💻 I am a Full Stack Developer with an orientation to the Front-end and Back-end. I am able to make complete web project always taking into account their scalability and efficiency.
For me, dedicating myself to programming means really understanding the context of human needs and, in turn, what is the purpose of technology, and in this way creating solutions that really help people.💛
     <br>
     </br>
     <br></br>
Why me? 🤔
<br>
</br>
<br></br>
Every single member of the IT community and i have an excellent technical skills, nevertheless with me you will get a developer with great proactivity, whether it is when it comes to learning, teaching or solving problems.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
