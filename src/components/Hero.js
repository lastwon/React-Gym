import React from "react";

import "../styles/intro.css";

import IntroVideo from "../images/intro.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video src={IntroVideo} autoPlay muted loop></video>
      <div className="hero-content">
        <h1>Next level gym</h1>
        <button className="btn-primary">#Youareincluded</button>
      </div>
    </section>
  );
};

export default Hero;
