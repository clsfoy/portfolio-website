import React from "react";
import "./Landing.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Landing = () => {
  return (
    <div className="landing-container">
      <div
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos="fade-in"
        class="perspective-text"
      >
        <div class="perspective-line">
          <p>Charlie Foy</p>
        </div>
        <div class="perspective-line">
          <p>Full-stack</p>
        </div>
        <div class="perspective-line">
          <p>Software</p>
        </div>
        <div class="perspective-line">
          <p>Developer</p>
        </div>
      </div>

      <div
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos="fade-in"
        data-aos-delay="200"
        className="landing-navs"
      >
        <Link to="about">
          <p className="btn">About</p>
        </Link>
        <Link to="portfolio">
          <p className="btn">Portfolio</p>
        </Link>
        <Link to="contact">
          <p className="btn">Contact</p>
        </Link>
        <a href="https://drive.google.com/file/d/1_KSnuIJCKORQOIJwmj7brwD59GvZoi11/view?usp=sharing">
          <p className="btn">CV</p>
        </a>
      </div>
    </div>
  );
};

export default Landing;
