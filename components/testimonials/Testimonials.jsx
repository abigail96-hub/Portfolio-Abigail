import React, { useRef, useState } from "react";
import "./testimonials.css";
import Agus from "../../assets/Agus.jpeg";
import erick from "../../assets/erick.jpeg";
import rodoo from "../../assets/rodoo.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients and co-workers</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={true}
        spaceBetween={30}
        modules={[Pagination]}
        className="container testimonials_container"
      >
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <img src={Agus} alt="bucco" />
          </div>
          <h5 className="name">Agustin Cristobo</h5>
          <small className="review">
            Something that tells us a lot to those of us who are entering the IT
            world of work is that soft-skills are sometimes more important than
            technical skills. In Abigail Cortes I found someone who unites these two
            facets in a natural way, a high-level technical ability that is only
            compared to his leadership, empathy, communication and, I am
            privileged to say, friendship. I had the opportunity to have him as
            a mentor, team leader and co-worker on the bootcamp final project.
            I'm sure he will enhance any team he's a part of, bringing skills
            and qualities desired in every programmer.
          </small>
          <div className="socials_cont">
            <a
              href="https://www.linkedin.com/in/agustin-cristobo/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/Fr33yr" target="_blank">
              <BsGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <img src={erick} alt="stevao" />
          </div>
          <h5 className="name">Erick Espinoza</h5>
          <small className="review">
            Working with Abigail Cortes as Teaching assistants in the group 11 was a
            pleasure I can testify he was always pursuing excellence by helping
            the group to grow not only technically also motivating them,
            creating connections and making a comfortable space where anyone
            could contribute without being ashamed or scare about failure
            because of it day by day the group confidence was growing too, he
            did a magnificent job and was a great mentor and partner.
          </small>
          <div className="socials_cont">
            <a
              href="https://www.linkedin.com/in/erick-espinoza-g%C3%B3mez-58b9b8231/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/eespinoza1" target="_blank">
              <BsGithub />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="avatar">
            <img src={rodoo} alt="pancho" />
          </div>
          <h5 className="name">Rodo</h5>
          <small className="review">
            Abigail is an excellent person, and also as a programmer he is someone
            you really want to have on your team.
          </small>
          <div className="socials_cont">
            <a
              href="https://www.linkedin.com/in/rodolfo-alvarez-montes/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/rody216" target="_blank">
              <BsGithub />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
