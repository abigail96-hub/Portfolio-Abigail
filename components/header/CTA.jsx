import React from "react";
// import CVEng from "../../assets/CV ingles.pdf";
import CVSpa from "../../assets/CV Español.pdf";
import Curriculum from "./../../assets/Curriculum Vitae Abigail Cortes.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <a href={Curriculum} download className="btn">
        Download CV 
      </a>
      {/* <a href={CVSpa} download className="btn">
        Download CV (Spanish)
      </a> */}
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
